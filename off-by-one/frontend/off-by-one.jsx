import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, signup, logout } from "./util/session_api_util";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // window.store = store;
  // window.dispatch = store.dispatch;
  // window.getState = store.getState;
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;

  ReactDOM.render(<h1>Welcome to Off By One!</h1>, root);
});
