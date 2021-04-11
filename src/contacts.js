import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <div className="main">
      <ul className="people">
      <Link to="/messages/admin">
        <button className="person">Admin <img src="face.png" alt=""></img></button>
      </Link>
      <Link to="/messages/johnsmith">
        <button className="person">John Smith <img src="face.png" alt=""></img></button>
      </Link>
      </ul>
      <div className="messages">
        <h1>TEST</h1>
      </div>
    </div>
  );
}

export default Contacts;