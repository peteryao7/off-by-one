import React from 'react';
import SplashSignupContainer from './splash_container';

const RenderSplash = ({user}) => {

  if(!user)
  {
    return (
      <div className="splash-page">
          <div className="splash-explanation-text">
            <h3>Learn, Share, Build</h3>
            <p>
              Each month, over 50 million developers come to Off By One to
              learn, share their knowledge, and build their careers.
              Join the world’s largest developer community.
            </p>
          </div>
        <SplashSignupContainer />
      </div>)
  } else return (<div></div>);
}

export default RenderSplash;
