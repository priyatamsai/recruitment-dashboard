import React, { Component } from 'react';
import AddJob from './addJob';
import RecJobListing from './recJobsListing';


class Recruiter extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <h2>recruiter</h2>
                    <div>
                        <AddJob />
                        <RecJobListing />
                    </div>
            </div>
            
         );
    }
}
 
export default Recruiter;