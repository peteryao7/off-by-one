import React from 'react';

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './SessionForm/login_form_container';
import SignupFormContainer from './SessionForm/signup_form_container';
import Header from './Header/header';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Header />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

  </div>
);

export default App;
