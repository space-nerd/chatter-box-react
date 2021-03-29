import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Contacts() {
  const navStyle = {
    color: 'white'
 };
 
  return (
    <div className="Contacts">
      <h1>Contacts:</h1>
      <Link to="/admin" style={navStyle}>
          <h3>Admin</h3>
      </Link>
    </div>
  );
}

export default Contacts;