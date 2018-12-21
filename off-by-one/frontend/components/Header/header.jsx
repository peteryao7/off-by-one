import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import GreetingContainer from '../Greeting/greeting_container';

class Header extends React.Component {

  constructor(props){
    super(props);
  }

// img src logo

  render() {

    return (<header className="header">
      <ul className="header-nav">
        <li className="header-link">
          <a href="/">
          <div className="logo-all">
            <div className="logo-pic">
            <img src="https://img.icons8.com/metro/1600/stackoverflow.png"/>
            </div>
            <div className="logo-text">
            Off By <strong>One</strong>
            </div>
          </div>
          </a>
        </li>
        <input className="nav-search-bar" type="text" placeholder="Search..."/>
        <GreetingContainer />
      </ul>
    </header>);
  }

}

export default Header;
