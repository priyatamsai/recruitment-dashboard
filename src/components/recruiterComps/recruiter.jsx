import React, { Component } from 'react';
import AddJob from './addJob';


class Recruiter extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <h2>recruiter</h2>
                    <div>
                        <AddJob />
                    </div>
            </div>
            
         );
    }
}
 
export default Recruiter;