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
import ChatMessages from '../../components/ChatMessages';

let unsubscribe = null;
const LocalChat = ({ loginUser, uid, ...props }) => {
  const [formValue, setFormValue] = useState('');
  const [user] = useAuthState(auth);
  const lastMessageRef = useRef(null);
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
          if (messages && messages.length > 14) deleteFirstItem(id, messages);
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
          lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
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
      <ChatMessages
        messages={messages}
        ref={lastMessageRef}
        sendMessage={sendMessage}
        user={user}
        formValue={formValue}
        handleChange={handleChange}
        loginGoogle={loginGoogle}
        loginFacebook={loginFacebook}
      />
    </>
  );
};

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
