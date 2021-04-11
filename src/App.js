import React from 'react';
import './App.css';
import Nav from './nav';
import About from './about'
import Contacts from './contacts';
import Admin from './users/admin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Contacts} />
      <Route path="/about" component={About} />
      <Route path="/admin" component={Admin} />
      </Switch>
      <footer>
        <h3>If you have any questions and/or concerns please contact the admin</h3>
      </footer>
    </div>
    </Router>
  );
}

export default App;