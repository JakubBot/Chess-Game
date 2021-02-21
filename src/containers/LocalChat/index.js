import React, { useState, useEffect, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  firestore,
  auth,
  googleProvider,
  facebookProvider,
} from '../../firebase-config';
import * as userActions from '../../redux/actions/userActions';
import { generateID } from '../utils/utils';
import './index.scss';

let unsubscribe = null;
const LocalChat = ({ loginUser, uid, ...props }) => {
  const [formValue, setFormValue] = useState('');
  const [user] = useAuthState(auth);
  const ref = useRef(null);
  const [docId, setDocId] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (!user) return;
    const userRef = firestore.collection('users').where('uid', '==', user.uid);

    unsubscribe = userRef.onSnapshot((docs) => {
      if (!docs.empty) {
        loginUser(docs);
      }
    });

    // eslint-disable-next-line consistent-return
    return () => unsubscribe && unsubscribe();
  }, [user]);

  useEffect(() => {
    ListenForUpdates(props.match.params.token);
  }, []);

  function ListenForUpdates(token) {
    ['p1_token', 'p2_token'].forEach((name) => {
      const chessRef = firestore.collection('games').where(name, '==', token);
      unsubscribe = chessRef.onSnapshot((querySnapshot) => {
        if (querySnapshot.size) {
          const [data] = querySnapshot.docs.map((doc) => {
            return {
              data: doc.data(),
              id: doc.id,
            };
          });
          const { messages } = data.data;
          const { id } = data;
          // its for keep only 20 messages in chat
          if (messages && messages.length > 20) deleteFirstItem(id, messages);
          setMessages(messages ?? []);
          setDocId(id);
        }
      });
    });
  }

  function deleteFirstItem(docId, messages) {
    const chessRef = firestore.collection('games').doc(docId);
    const [, ...rest] = messages;
    chessRef.update({
      messages: rest,
    });
  }
  const sendMessage = async (e) => {
    e.preventDefault();
    if (formValue === '' || !user) return;
    const { uid, photoURL } = user;
    const chessRef = firestore.collection('games').doc(docId);
    chessRef
      .update({
        messages: [
          ...messages,
          {
            message: formValue,
            uid,
            photoURL,
            id: generateID(6),
          },
        ],
      })
      .then(() => {
        setFormValue('');
        if (window.innerWidth < 800)
          ref.current.scrollIntoView({ behavior: 'smooth' });
      });
  };

  const handleChange = (e) => {
    setFormValue(e.target.value);
  };
  const loginGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };

  const loginFacebook = () => {
    auth.signInWithPopup(facebookProvider);
  };

  return (
    <>
      <div className="scoreBoard__info__chat">
        <div className="scoreBoard__info__header">Chat</div>
        <div className="scoreBoard__info__options">
          <div className="chat">
            <div className="windowChat">
              {messages !== undefined &&
                messages.map((msg) => {
                  return (
                    <ChatMessage
                      key={msg.id}
                      user={user}
                      message={msg}
                      uid={msg.uid}
                    />
                  );
                })}

              <span ref={ref} />
            </div>
            <div className="chatMessage">
              <form onSubmit={sendMessage}>
                <input
                  type="text"
                  value={formValue}
                  onChange={handleChange}
                  placeholder="Aa"
                />
                <button type="submit">
                  <span role="img" aria-label="icon">
                    🕊️
                  </span>
                </button>
              </form>
            </div>
            {!user && (
              <div className="emptyChat">
                <h4>Login to use this chat</h4>
                <div className="emptyChat__icons  flex-c">
                  <span className="icon-google google " />
                  <div
                    className="login__buttons__button google"
                    role="button"
                    tabIndex="0"
                    onClick={loginGoogle}
                  >
                    Google
                  </div>
                </div>
                <div className="emptyChat__icons flex-c">
                  <span className="icon-facebook-squared facebook " />
                  <div
                    className="login__buttons__button facebook"
                    role="button"
                    tabIndex="0"
                    onClick={loginFacebook}
                  >
                    Facebook
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

function ChatMessage(props) {
  const { uid, message, photoURL } = props.message;
  const userUID = props.user.uid;

  const messageClass = uid === userUID ? 'sent' : 'received';
  return (
    <>
      <div className="message">
        <div className={`message ${messageClass}`}>
          <div className={`userMessage ${messageClass}`}>{message}</div>
          <img src={photoURL} alt="userPhoto" />
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  const { uid } = state.user;
  return {
    uid,
  };
}

const mapDisptachToProps = {
  loginUser: userActions.loginUser,
};
export default withRouter(
  connect(mapStateToProps, mapDisptachToProps)(LocalChat)
);
