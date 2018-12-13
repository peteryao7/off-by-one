import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, demoLogin }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="demo-login" onClick={demoLogin}>Demo Login</button>
      <Link to="/login" className="login">Log In</Link>
      <Link to="/signup" className="signup">Sign up</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <div className="loggedin-header">
        <h2 className="header-name">{currentUser.username}</h2>
        <button className="header-logout-button" onClick={logout}>Log Out</button>
      </div>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
