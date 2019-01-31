import React from 'react';
import { Link } from 'react-router-dom';

/*
  change to links instead of ordered list later
  off by one -> questions index
  users goes -> users index
  tags goes -> tags index if I reach it
  jobs -> some extra jobs page
*/

const LeftSidebar = navLinks => (
  <div className="left-sidebar">
      <div className="space-li-header">
        <a className="home-link" href="/">Home</a>
      </div>
      <div className="public-header">PUBLIC</div>
      <ul className="public-ul">
        <li className="space-li">
        <Link to="/questions" className="grey-beige">
              <div className="logo">
                off by one
              </div>
            </Link>
        </li>
        <li className="tags-li">
          Tags
        </li>
        <li className="tags-li">
          Users
        </li>
        <li className="jobs-li">
          <Link to="/jobs" className="grey-beige">
          Jobs
          </Link>
        </li>
      </ul>
  </div>
);

export default LeftSidebar;
