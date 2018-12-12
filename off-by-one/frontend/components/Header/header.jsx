import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import GreetingContainer from '../Greeting/greeting_container';

class Header extends React.Component {

  constructor(props){
    super(props);
  }

// img src logo

  render() {

    return (<header className="nav-bar">
      <ul className="header-nav">
        <li className="header-link">
          <a href="/">
            <div className="logo-container">
              <div className="logo">
              </div><strong>Off By One!!!</strong>
            </div>
          </a>
        </li>
        <GreetingContainer />
      </ul>
    </header>);
  }

}

export default Header;
