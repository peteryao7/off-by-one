import React from 'react';
import {Link} from 'react-router-dom';
import SplashSignupContainer from './splash_container';
import QuestionIndexContainer from '../Question/question_index_container'
const RenderSplash = (props) => {

  if(!props.currentUser)
  {
    return (
      <div>
      <div className="splash-page">
          <div className="splash-explanation-text">
            <h3>Learn, Share, Build</h3>
            <div className="splash-top-message">
              Each month, over 50 million developers come to Off By One to
              learn, share their knowledge, and build their careers.
              <br/><br/>
              Join the world’s largest developer community.
            </div>
            <div className="splash-bottom-message">
              Off By One Business Solutions: Looking to understand, engage, or hire developers? Learn more!
            </div>
          </div>
        <SplashSignupContainer />
      </div>
      <div>
        <QuestionIndexContainer />
      </div>
    </div>)
  } else { return (
    <div>
      <QuestionIndexContainer />
    </div>
  ) }
}

export default RenderSplash;
