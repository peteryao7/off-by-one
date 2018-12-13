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
            Off By One
          </a>
        </li>
        <GreetingContainer />
      </ul>
    </header>);
  }

}

export default Header;
