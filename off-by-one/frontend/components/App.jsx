import React from 'react';

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './SessionForm/login_form_container';
import JobsContainer from './jobs/jobs_container';
import SignupFormContainer from './SessionForm/signup_form_container';
import QuestionShowContainer from './Question/question_show_container';
import QuestionEditContainer from './Question/question_edit_container';
import QuestionFormContainer from './Question/question_form_container';
import Header from './Header/header';
import LeftSidebar from './LeftSidebar/left_sidebar'
import FooterContainer from './Footer/footer_container'
import RenderSplash from './Splash/splash.jsx'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (

  <div className="top">
    <Header />

    <div className="bottom">
        <LeftSidebar />

      <div className="main-div">
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <ProtectedRoute exact path="/questions/ask"
            component={QuestionFormContainer} />
          <ProtectedRoute exact path="/questions/:questionId/edit"
            component={QuestionEditContainer} />
          <Route exact path="/jobs" component={JobsContainer} />
          <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
          <AuthRoute exact path ="/" component={Test} />
          <Redirect to="/login" />
        </Switch>
        <FooterContainer />
      </div>
    </div>
  </div>
);

const Test = () => {
  return (
    <Route exact path="/" component={RenderSplash} />
  )
}

export default App;
