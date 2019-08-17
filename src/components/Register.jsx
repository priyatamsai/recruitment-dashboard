import React, { Component } from 'react';
import {register} from './commonFunctions';

class Register extends Component {
    constructor(){
        super()
        this.state ={
            username: '',
            email: '',
            password: '',
            type: "1",
            errors: {}
        }

		this.onChange =this.onChange.bind(this)
		this.onSubmit =this.onSubmit.bind(this)
	}


    onChange(e){
        this.setState( { [e.target.name]: e.target.value})
        console.log(this.state)
    }


	onSubmit(e){
			e.preventDefault()

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
        }

		register(newUser).then(res => {
			if(res){
				this.props.history.push('/login')
			}
		})
	}
	

    render() { 
        return ( 
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm8- mx-auto">
                        <form noValidate onSubmit={this.onSubmit} method='POST'>
                            <label htmlFor="first_name">User name</label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="username" 
                                placeholder="name"
                                value={this.state.username} 
                                onChange={this.onChange}   
                            />

							<label htmlFor="email">Email address</label>
							<input 
								type="email"
								className="form-control" 
								name="email" 
								placeholder="enter email"
								value={this.state.email} 
								onChange={this.onChange}   
							/>

                            <label htmlFor="password">password</label>
                            <input 
                                type="password"
                                className="form-control" 
                                name="password" 
                                placeholder="password"
                                value={this.state.password} 
                                onChange={this.onChange}   
                            />
                            <label htmlFor="utype">userrrtype</label>
                            
                            <select name="type" value={this.state.type} onChange={this.onChange} className="form-control">
                                <option value="1">applicant</option>
                                <option value="2">Recruiter</option>
                            </select> 


							<button type="submit" className="btn btn-lg btn-primary btn-block">
								Register
							</button>
						</form>
					</div>  
				</div>
			</div>
		 );
	}
}
 
export default Register;