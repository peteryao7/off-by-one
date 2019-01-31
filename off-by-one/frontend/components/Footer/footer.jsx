import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  col1(){
      return (<ul>
          <li className="space-li-header">
              <a className="title-footer" href="/">
              OFF BY ONE
            </a>
          </li>
          <li className="space-li">
            <Link to="/questions">
              Questions
            </Link>
          </li>
          <li className="space-li">
            <Link to="/jobs">
              Jobs
            </Link>
          </li>
        </ul>)
  }
  col2() {
      return (<ul>
          <li className="space-li-header">
              PRODUCTS
          </li>
          <li className="space-li">
              <strong>Teams</strong>
          </li>

          <li className="space-li">
                  <strong>Talent</strong>
          </li>

          <li className="space-li">
                  <strong>Engagement</strong>
          </li>

          <li className="space-li">
                  <strong>Enterprise</strong>
          </li>
        </ul>)
  }

  col3() {
      return (<ul>
          <li className="space-li-header">
            <a href="https://en.wikipedia.org/wiki/Off-by-one_error" target="_blank" className="o-ninety-fiveem grey-white">
              The OBOE
            </a>
          </li>
          <li className="space-li">
              <strong>About</strong>
          </li>

          <li className="space-li">
              <strong>Press</strong>
          </li>

          <li className="space-li">
              <strong>Work Here</strong>
          </li>

          <li className="space-li">
              <strong>Legal</strong>
          </li>
        </ul>)
  }

  col4() {
      return (<ul>
          <li className="space-li-header">
              STACK EXCHANGE NETWORK
          </li>
          <li className="space-li">
            <Link to="/questions">
              Off By One
            </Link>
          </li>

          <li className="space-li">
              <strong>Jobs</strong>
          </li>
        </ul>)
  }


  render() {
      return (<div className="site-footer-container">
          <div className="site-footer-logo">
            <Link to="/">
            </Link>
          </div>
          <div className="site-footer">
            {this.col1()}
            {this.col2()}
            {this.col3()}
            {this.col4()}
          </div>
          <div className="site-footer-outside">
            <ul>
              <li>
                <a className="side-links" href="" target="_blank">
                  Profile
                </a>
              </li>
              <li>
              <a className="side-links" href="https://www.linkedin.com/in/pyao7/" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="side-links" href="https://github.com/peteryao7" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
            <a className="side-links" href="" target="_blank">
              © 2018 Off By One
            </a>
          </div>
        </div>)
  }
}


export default Footer;
