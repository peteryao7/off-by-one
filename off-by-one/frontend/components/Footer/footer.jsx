import React from 'react';
import {Link} from 'react-router-dom';

function col1(){
    return <ul>
        <li className="space-li-header">
            <a className="o-ninety-fiveem grey-white" href="/">
            Home
          </a>
        </li>
        <li className="space-li">
          <Link to="/questions" className="grey-white">
            questions
          </Link>
        </li>
      </ul>;
}
function col2() {
    return <ul>
        <li className="space-li-header">
            <div className="home-link not-allowed grey-white">
            Spaceship
          </div>
        </li>
        <li className="space-li">
            <div className="not-allowed grey-white">
            <strong>cats</strong>
          </div>
        </li>

        <li className="space-li">
            <div className="not-allowed grey-white">
                <strong>dogs</strong>
            </div>
        </li>

        <li className="space-li">
            <div className="not-allowed grey-white">
                <strong>bananas</strong>
            </div>
        </li>
      </ul>;
} function col3() {
    return <ul>
        <li className="space-li-header">
          <a href="https://en.wikipedia.org/wiki/Dante_Alighieri" target="_blank" className="o-ninety-fiveem grey-white">
            Dante Alighieri
          </a>
        </li>
        <li className="space-li">
          <div className="not-allowed grey-white">
            <strong>giraffe</strong>
          </div>
        </li>

        <li className="space-li">
          <div className="not-allowed grey-white">
            <strong>meaning</strong>
          </div>
        </li>

        <li className="space-li">
          <div className="not-allowed grey-white">
            <strong>sense</strong>
          </div>
        </li>
      </ul>;
} function col4() {
    return <ul>
        <li className="space-li-header">
          <div className="home-link not-allowed grey-white">
            Earthship
          </div>
        </li>
        <li className="space-li">
          <Link to="/questions" className="grey-white">
            Off By One
          </Link>
        </li>

        <li className="space-li">
          <Link to="/jobs" className="grey-white">
            <strong>Jobs</strong>
          </Link>
        </li>
      </ul>;
}

const footer = () => {
    return <div className="site-footer-container">
        <div className="site-footer-logo">
          <Link to="/" className="grey-white">
          </Link>
        </div>
        <div className="site-footer">
          {col1()}
          {col2()}
          {col3()}
          {col4()}
        </div>
        <div className="site-footer-outside">
          <ul>
            <li>
              <a className="grey-white" href="http://www.lukeparisdreyer.space/" target="_blank">
                Profile
              </a>
            </li>
            <li>
                    <a className="grey-white" href="https://www.linkedin.com/in/lukepdreyer/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="grey-white" href="https://github.com/parisDreyer" target="_blank">
                Github
              </a>
            </li>
          </ul>
          <div>
            site design / logo © 2018 Off By One; user contributions
            licensed under cc by-sai 3.2 with attribution required. rev
            2018.11.14.-^-
          </div>
        </div>
      </div>;
}


export default footer;
