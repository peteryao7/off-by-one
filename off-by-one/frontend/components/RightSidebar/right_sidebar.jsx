import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebar = navLinks => (
  <div className="right-sidebar">
      <div className="features">
        Featured on Off By One
      </div>
      <ul className="sites-ul">
        <li className="space-li">
          <a href="https://stackoverflow.com/" className="grey-beige">
              Stack Overflow
          </a>
        </li>
        <li className="space-li">
          <a href="https://math.stackexchange.com/" className="grey-beige">
              Math StackExchange
          </a>
        </li>
        <li className="tags-li">
          <a href="https://www.quora.com/" className="grey-beige">
              Quora
          </a>
        </li>
        <li className="tags-li">
          <a href="https://github.com/peteryao7" className="grey-beige">
              GitHub
          </a>
        </li>
        <li className="tags-li">
          <a href="https://www.appacademy.io/" className="grey-beige">
              App Academy
          </a>
        </li>


      </ul>
  </div>
);

export default RightSidebar;
