import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import FloatedButton from './FloatedButton';
import {
  firestore,
  auth,
  googleProvider,
  facebookProvider,
} from '../../firebase-config';
import * as userActions from '../../redux/actions/userActions';
import { generateID } from '../utils/utils';

const $ = window.jQuery;

let unsubscribe = null;
const GlobalChat = ({ uid, loginUser }) => {
  const [formMessage, setFormMessage] = useState('');
  const [user] = useAuthState(auth);
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
    ListenForUpdates();

    return () => unsubscribe && unsubscribe();
  }, []);

  function ListenForUpdates() {
    const messageRef = firestore.collection('globalMessages');
    unsubscribe = messageRef.onSnapshot((querySnapshot) => {
      if (querySnapshot.size) {
        const data = querySnapshot.docs.map((doc) => {
          const { message, uid, photoURL, id } = doc.data();
          return {
            message,
            uid,
            photoURL,
            id,
          };
        });
        setMessages(data);
        // const { messages } = data.data;
        // const { id } = data;
        // if (messages && messages.length > 20) deleteFirstItem(id, messages);
        // setMessages(data.messages ?? []);
      }
    });
  }

  const handleClick = (e) => {
    const onIconClick = $(e.target).attr('name');
    if (onIconClick === 'floatedButton__icon')
      $('.floated').toggleClass('active');
  };
  const handleChange = (e) => {
    setFormMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formMessage === '') return;
    const messageRef = firestore.collection('globalMessages');

    messageRef.add({
      message: formMessage,
      uid: user.uid,
      photoURL: user.photoURL,
      id: generateID(6),
    });
    setFormMessage('');
  };

  return (
    <>
      <FloatedButton
        onClick={handleClick}
        onChange={handleChange}
        formMessage={formMessage}
        onSubmit={handleSubmit}
        messages={messages}
        currentUID={uid}
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

export default connect(mapStateToProps, mapDisptachToProps)(GlobalChat);
