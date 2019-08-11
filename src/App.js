import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from './components/landing';
import Login from './components/login';
import Register from './components/Register';
//import Profile from './components/profile';
import Navbar from './components/navbar';
import Applicant from './components/applicant';
import Profile from './components/profile';
import Applied from './components/applied';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/getjobs" component={Applicant} />
          <Route exact path="/applied" component={Applied} />
        </div>
      </div>
    </Router>
    
  );
}

export default App;
