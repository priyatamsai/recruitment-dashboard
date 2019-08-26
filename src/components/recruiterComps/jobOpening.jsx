import React, { Component } from 'react';

class JobOpening extends Component {
    state = {  }

    constructor(props) {
        super(props);
        this.showStatus = this.showStatus.bind(this);
      }

    /*onClick(e){
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
    }*/

    showStatus = (e)=> {
        e.preventDefault();
        console.log("hey..you know .. show stat is called")
        this.props.onShowStatus(this.props.job.id)
    }
     
    render() {
        
        return (
            <tr>
                <th scope="row">{this.props.job.id}</th>
                <td>{this.props.job.title}</td>
                <td>{this.props.job.description}</td>
                <td>{this.props.job.experience}</td>
                <td> <button onClick={(e) => this.showStatus(e)}>show status</button></td>
            </tr>
            
        );
    }
    
}
 
export default JobOpening;