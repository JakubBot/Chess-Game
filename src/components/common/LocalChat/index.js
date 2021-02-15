import React, { useState, useEffect, useRef } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import {
  firestore,
  auth,
  firebase,
  googleProvider,
  facebookProvider,
} from '../../../firebase-config';
import * as userActions from '../../../redux/actions/userActions';
import './index.scss';

let unsubscribe = null;
const LocalChat = ({ loginUser }) => {
  const [formValue, setFormValue] = useState('');
  const [user] = useAuthState(auth);
  const ref = useRef(null);
  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt', 'desc');
  const [messages] = useCollection(query, { idField: 'id' });

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

  const sendMessage = async (e) => {
    e.preventDefault();
    if (formValue === '' || !user) return;
    const { uid, photoURL } = user;
    await messageRef
      .add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        message: formValue,
        uid,
        photoURL,
      })
      .then(() => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      });
    setFormValue('');
    // ref.current.scrollIntoView({ behavior: 'smooth' });
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
      <div className="chat">
        <div className="windowChat">
          {messages &&
            user &&
            messages.docs
              .reverse()
              .map((msg) => (
                <ChatMessage key={msg.id} user={user} message={msg} />
              ))}

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
    </>
  );
};

function ChatMessage(props) {
  const { uid, photoURL, message } = props.message.data();

  const messageClass = uid === props.user.uid ? 'sent' : 'received';
  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className={`userMessage ${messageClass}`}>{message}</div>
        <img src={photoURL} alt="userPhoto" />
      </div>
    </>
  );
}

const mapDisptachToProps = {
  loginUser: userActions.loginUser,
};
export default connect(null, mapDisptachToProps)(LocalChat);
