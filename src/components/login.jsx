import React, { Component } from 'react';
import {login} from './commonFunctions';

class Login extends Component {
    
    constructor(){
        super()
        this.state ={
            username: '',
            password: '',
            errors: {}
        }

		this.onChange =this.onChange.bind(this)
		this.onSubmit =this.onSubmit.bind(this)
	}

	onChange(e){
		this.setState( { [e.target.name]: e.target.value})
	}

	onSubmit(e){
		e.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
				if (res.type == 1)
					this.props.history.push('/profile')
				else if (res.type == 2)
					this.props.history.push('/rec_profile')
            }
        })
    }

	render() { 
		return ( 
			<div className="container">
				<div className="jumbotron mt-5">
					<div className="col-sm8- mx-auto">
						<form noValidate onSubmit={this.onSubmit}>
							<label htmlFor="username">Username</label>
							<input 
								type="text"
								className="form-control" 
								name="username" 
								placeholder="enter username"
								value={this.state.username} 
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

							<button type="submit" className="btn btn-lg btn-primary btn-block">
								Sign in
							</button>
						</form>
					</div>  
				</div>
			</div>
		);
	}
}
 
export default Login;
