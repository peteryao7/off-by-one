import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebar = navLinks => (
  <div className="right-sidebar">
    <div className="featured-links">
      <div className="features">
        Featured on OBO
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

      <div className="hot-network-qs">
        <div className="features">
          Hot Network Questions
        </div>

        <ul className="qs-ul">
          <li className="qs-li">
            Integrating over a hypercube, not a hypersphere
          </li>
          <li className="qs-li">
            Should a directory path variable end with a trailing slash?
          </li>
          <li className="qs-li">
            Compare points of a circle in canvas with a drawing made in canvas by the user
          </li>
          <li className="qs-li">
            Should I interview someone who ditched an interview before?
          </li>
          <li className="qs-li">
            How can I add data when sending OneSignal mobile push in C#?
          </li>
          <li className="qs-li">
            NodeJS storing encrypted database passwords you need to decrypt and read, not user passwords?
          </li>
          <li className="qs-li">
            Punished for doing my job too well
          </li>
          <li className="qs-li">
            How to close connection from mongodb to springboot once connection stablish
          </li>



        </ul>
      </div>

  </div>
);

export default RightSidebar;
