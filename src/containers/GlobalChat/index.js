import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import FloatedButton from '../../components/FloatedButton/FloatedButton';
import { firestore, auth, firebase } from '../../firebase-config';

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
    unsubscribe = messageRef
      .orderBy('createdAt', 'asc')
      .onSnapshot((querySnapshot) => {
        if (querySnapshot.size) {
          const data = querySnapshot.docs.map((doc) => {
            const { message, uid, photoURL } = doc.data();
            const docId = doc.id;
            return {
              message,
              uid,
              photoURL,
              docId,
            };
          });
          const firstMessage = [...data].shift();
          if (data.length > 12) {
            deleteFirstMessage(firstMessage.docId);
            return;
          }
          setMessages(data);
        }
      });
  }
  const deleteFirstMessage = (id) => {
    const messageRef = firestore.collection('globalMessages').doc(id);
    messageRef.delete();
  };
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
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
