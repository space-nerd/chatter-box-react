import React from 'react';
import './App.css';
import Nav from './nav';
import About from './about'
import Contacts from './contacts';
import Home from './home'
import Admin from './users/admin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/admin" component={Admin} />
      </Switch>
      <Contacts></Contacts>
    </div>
    </Router>
  );
}

export default App;