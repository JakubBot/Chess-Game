import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import { auth, googleProvider, facebookProvider } from '../../firebase-config';
import LoginForm from './LoginForm';
import * as userActions from '../../redux/actions/userActions';
import './index.scss';

const Login = ({ logIn }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) return;
    const { uid, displayName, photoURL } = user;
    // eslint-disable-next-line no-underscore-dangle
    const _user = {
      uid,
      name: displayName,
      photo: photoURL,
    };

    logIn(_user);
  }, [user]);

  const loginGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };
  const signOut = () => {
    auth.signOut();
  };
  const loginFacebook = () => {
    auth.signInWithPopup(facebookProvider);
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
  };
  return (
    <>
      <LoginForm
        forms={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        user={user}
        loginGoogle={loginGoogle}
        signOut={signOut}
        loginFacebook={loginFacebook}
      />
    </>
  );
};

const mapDispatchToProps = {
  logIn: userActions.logIn,
};
export default connect(null, mapDispatchToProps)(Login);
