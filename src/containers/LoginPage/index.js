import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { withRouter } from 'react-router-dom';
import {
  firestore,
  auth,
  loginGoogle,
  loginFacebook,
  signOutUser,
} from '../../firebase-config';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as userActions from '../../redux/actions/userActions';
import LogIn from '../utils/loginUitls';

let unsubscribe = null;
const LoginPage = ({ user, history, loginUser, logOutUser }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [authUser] = useAuthState(auth);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    unsubscribe = LogIn(authUser, user, loginUser);

    return () => unsubscribe && unsubscribe();
  }, [authUser]);

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

function mapStateToProps(state) {
  const { user } = state;
  return {
    user,
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginPage)
);
