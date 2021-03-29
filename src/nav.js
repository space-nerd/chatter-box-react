import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
       color: 'white'
    };


  return (
    <nav>
        <Link to="/">
        <img src="icon.png"/>
        </Link>
        <ul className="nav-links">
            <Link to="/about" style={navStyle}>
              <li><button>About</button></li>
            </Link>
            <Link to="/contacts" style={navStyle}>
              <li><button>Contacts</button></li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;