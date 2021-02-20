import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import {
  firestore,
  auth,
  loginGoogle,
  loginFacebook,
  signOutUser,
} from '../../firebase-config';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as userActions from '../../redux/actions/userActions';
import './index.scss';

let unsubscribe = null;
const LoginPage = ({ history, loginUser, logOutUser }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [user] = useAuthState(auth);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (!user) return;

    const userRef = firestore.collection('users').where('uid', '==', user.uid);

    unsubscribe = userRef.onSnapshot((docs) => {
      if (!docs.empty) {
        loginUser(docs);
      } else {
        register(user.uid);
      }
    });

    return () => unsubscribe && unsubscribe();
  }, [user]);

  const register = (uid) => {
    const { photoURL, displayName } = user;
    firestore.collection('users').add({
      uid,
      points: 500,
      userName: displayName,
      photo: photoURL,
    });
  };

  const signOut = () => {
    signOutUser(logOutUser);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userRef = firestore
      .collection('users')
      .where('email', '==', form.email)
      .where('password', '==', form.password);

    unsubscribe = userRef.onSnapshot((docs) => {
      if (!docs.empty) {
        loginUser(docs).then(() => {
          history.push('/');
        });
      } else {
        setErrors({
          formError:
            'We cannot find an account with that email address and password',
        });
      }
    });
  };

  return (
    <>
      <Navbar />

      <div className="loginPage__wrapper">
        <LoginForm
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          user={user}
          loginGoogle={loginGoogle}
          signOut={signOut}
          loginFacebook={loginFacebook}
          errors={errors}
        />
      </div>
    </>
  );
};

const mapDispatchToProps = {
  logOutUser: userActions.logOutUser,
  loginUser: userActions.loginUser,
};

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));
