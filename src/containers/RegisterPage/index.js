import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { firestore, auth } from '../../firebase-config';
import { generateID } from '../utils/utils';
import * as userActions from '../../redux/actions/userActions';

let unsubscribe;
const RegisterPage = ({
  user,
  history,
  loginUserWithForm,
  loginUserWithSocials,
}) => {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [authUser] = useAuthState(auth);
  useEffect(() => {
    if (authUser !== null && user === null) {
      unsubscribe = loginUserWithSocials(authUser);
    }
    if (authUser === null && user === null) {
      loginUserWithForm();
    }
    return () => unsubscribe && unsubscribe();
  }, [authUser]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formIsValid = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { userName, email, password } = form;
    const _error = {};

    if (userName.length === 0) {
      _error.userName = 'User name is required';
    } else if (userName.length < 3) {
      _error.userName = 'User name has to be longer than 3 characters';
    } else if (userName.length > 10) {
      _error.userName = 'User name has to be shorter than 10 characters';
    }

    if (email.length === 0) {
      _error.email = 'Email is required';
    } else if (!re.test(email.toLocaleLowerCase())) {
      _error.email = 'Please enter a valid email address.';
    }
    if (password.length === 0) {
      _error.password = 'Password is required';
    } else if (password.length < 3) {
      _error.password = 'Password has to be longer than 3 characters';
    } else if (password.length > 10) {
      _error.password = 'Password has to be shorter than 10 characters';
    }

    setErrors(_error);

    return Object.keys(_error).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;

    const uid = generateID();
    const photo =
      'https://betacssjs.chesscomfiles.com/bundles/web/images/white_400.09ae248e.png';
    const { userName, email, password } = form;
    const user = {
      email,
      password,
      uid,
      userName,
      photo,
      points: 500,
    };
    const usersRef = firestore.collection('users');
    usersRef.add(user).then(() => {
      loginUserWithForm({ user, method: 'set' });
    });

    setForm({
      userName: '',
      email: '',
      password: '',
    });
    history.push('/');
  };

  return (
    <>
      <div className="registerPage__wrapper">
        <RegisterForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          form={form}
          errors={errors}
        />
      </div>
    </>
  );
};
function mapStateToProps({ user }) {
  return {
    user,
  };
}

const mapDispatchToProps = {
  loginUserWithSocials: userActions.loginUserWithSocials,
  loginUserWithForm: userActions.loginUserWithForm,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
);
