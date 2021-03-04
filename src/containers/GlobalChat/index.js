/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import FloatedButton from '../../components/FloatedButton';
import firebase, {
  firestore,
  loginGoogle,
  loginFacebook,
} from '../../firebase-config';

const $ = window.jQuery;

let unsubscribe = null;
const GlobalChat = ({ user }) => {
  const [formMessage, setFormMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);

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
          const firstMessage = data[0];
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
    lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });

    const onIconClick = $(e.target).attr('name');
    if (onIconClick === 'floatedButton__icon')
      $('.floated').toggleClass('active');
  };
  const handleChange = (e) => {
    setFormMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formMessage === '' || !user) return;
    const messageRef = firestore.collection('globalMessages');

    messageRef.add({
      message: formMessage,
      uid: user.uid,
      photoURL: user.photo,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setFormMessage('');
    lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <FloatedButton
        onClick={handleClick}
        onChange={handleChange}
        formMessage={formMessage}
        onSubmit={handleSubmit}
        messages={messages}
        user={user}
        ref={lastMessageRef}
        loginGoogle={loginGoogle}
        loginFacebook={loginFacebook}
      />
    </>
  );
};
function mapStateToProps(state) {
  const { user } = state;
  return {
    user,
  };
}

export default connect(mapStateToProps, null)(GlobalChat);
