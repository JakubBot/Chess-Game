import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import FloatedButton from '../../components/FloatedButton/FloatedButton';
import { firestore, auth } from '../../firebase-config';
import { generateID } from '../utils/utils';

const $ = window.jQuery;

let unsubscribe = null;
const GlobalChat = ({ uid }) => {
  const [formMessage, setFormMessage] = useState('');
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);

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

export default connect(mapStateToProps, null)(GlobalChat);
