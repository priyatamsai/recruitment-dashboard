import React, { Component } from 'react';
import {register} from './applicant/userFunctions';

class Register extends Component {
		constructor(){
				super()
				this.state ={
						username: '',
						email: '',
						password: '',
						typ: '',
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

				const newUser = {
						username: this.state.username,
						email: this.state.email,
						typ: this.state.typ,
						password: this.state.password
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
												<form noValidate onSubmit={this.onSubmit}>

														<label htmlFor="username">Username</label>
														<input 
																type="text"
																className="form-control" 
																name="username" 
																placeholder="username"
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

														<label htmlFor="type">User Type</label>
														<input 
																type="text"
																className="form-control" 
																name="typ" 
																placeholder="type"
																value={this.state.typ} 
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