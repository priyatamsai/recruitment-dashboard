import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from './components/landing';
import Login from './components/login';
import Register from './components/Register';
import Profile from './components/applicant/profile';
import Navbar from './components/navbar';

import Recruiter from './components/recruiterComps/recruiter';
import RecJoblistings from './components/recruiterComps/recJobsListing';
import AddJob from './components/recruiterComps/addJob';

import Applicant from './components/applicant/applicant';
import Applied from './components/applicant/applied';

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

          <Route exact path="/rec_profile" component={Recruiter} />
          <Route exact path="/addjob" component={AddJob} />
          <Route exact path="/listmyopenings" component={RecJoblistings} /> 
          <Route exact path="/openingDetail" component={OpeningStats} />

          <Route exact path="/profile" component={Profile} />
          <Route exact path="/getjobs" component={Applicant} />
          <Route exact path="/applied" component={Applied} />
        </div>
      </div>
    </Router>
    
  );
}

export default App;
