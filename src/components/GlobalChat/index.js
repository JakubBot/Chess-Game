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
  const [messages, setMessages] = useState();
  useEffect(() => {
    ListenForUpdates();

    return () => unsubscribe && unsubscribe();
  }, []);

  function ListenForUpdates() {
    const messageRef = firestore.collection('globalMessages');
    unsubscribe = messageRef.onSnapshot((querySnapshot) => {
      if (querySnapshot.size) {
        const data = querySnapshot.docs.map((doc) => {
          return {
            data: doc.data(),
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
  console.log(messages);

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
    const messageRef = firestore.collection('globalMessages');

    messageRef.add({
      message: formMessage,
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
