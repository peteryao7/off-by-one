import React from 'react';

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './SessionForm/login_form_container';
import SignupFormContainer from './SessionForm/signup_form_container';
// import QuestionShowContainer from './Question/question_show_container';
// import QuestionFormContainer from './Question/question_form_container';
import Header from './Header/header';
import LeftSidebar from './LeftSidebar/left_sidebar'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="top">
    <Header />

    <div className="bottom">
      <LeftSidebar />
      <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Redirect exact to="/" />
      </Switch>
    </div>
  </div>
);

export default App;

// <ProtectedRoute exact path="/questions/ask"
//   component={QuestionFormContainer} />
