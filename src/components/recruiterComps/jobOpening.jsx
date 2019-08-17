import React, { Component } from 'react';

class JobOpening extends Component {
    state = {  }

    onClick(e){
		e.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
                this.props.history.push('/rec_profile')
            }
        })
    }
     
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