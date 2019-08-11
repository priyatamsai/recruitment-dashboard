import React, { Component } from 'react';

class JobOpening extends Component {
    state = {  }
     
    render() {
        return (
        <div className="container">
            <p>{this.props.job.id}</p>
            <p>{this.props.job.description}</p>
            <p>{this.props.job.experience}</p>  
            <br></br>  
        </div>
        );
    }
    
}
 
export default JobOpening;