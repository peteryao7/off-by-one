import React from 'react';

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './SessionForm/login_form_container';
import JobsContainer from './Jobs/jobs_container';
import SignupFormContainer from './SessionForm/signup_form_container';
import QuestionShowContainer from './Question/question_show_container';
import QuestionEditContainer from './Question/question_edit_container';
import QuestionFormContainer from './Question/question_form_container';
import QuestionIndexContainer from './Question/question_index_container';
import Header from './Header/header';
import LeftSidebar from './LeftSidebar/left_sidebar'
import FooterContainer from './Footer/footer_container'
import RenderSplashContainer from './Splash/render_splash_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (

  <div className="top">
    <Header />

    <div className="bottom">
        <LeftSidebar />

      <div className="main-div" id="main-div">
        <div className="main-and-right-sidebar-page">
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <ProtectedRoute exact path="/questions/ask"
            component={QuestionFormContainer} />
          <ProtectedRoute exact path="/questions/:questionId/edit"
            component={QuestionEditContainer} />
          <Route exact path="/jobs" component={JobsContainer} />
          <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
          <Route exact path="/questions" component={QuestionIndexContainer} />
          <Route exact path ="/" component={RenderSplashContainer} />
          <Redirect to="/login" />
        </Switch>
        </div>
        <FooterContainer />
      </div>

    </div>
  </div>
);

export default App;
