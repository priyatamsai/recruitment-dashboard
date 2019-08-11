import React, { Component } from 'react';
import {profile} from './applicant/userFunctions';
import {getProfileData} from './applicant/userFunctions';

class Profile extends Component {
	constructor(){
		super()
		this.state ={
			firstname: '',
			lastname: '',
			yearofgrad: '',
			linkedinprofile: '', 
			lastdegree: '', 
			university: '', 
			resume: '',
			username: localStorage.usertoken,
			errors: {}
		}
				
		this.onChange =this.onChange.bind(this)
		this.onSubmit =this.onSubmit.bind(this)
		//this.getProfile = this.getProfile.bind(this)

		//this.getProfile()
		}

	componentDidMount(){
		getProfileData(this.state.username).then(res => {
					if(res){
						this.setState({firstname:res.firstname,lastname:res.lastname})
					}
				})
	}

	onChange(e){
		this.setState( { [e.target.name]: e.target.value})
	}

	onSubmit(e){
		e.preventDefault()

		const userprofile = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			yearofgrad: this.state.yearofgrad,
			linkedinprofile: this.state.linkedinprofile, 
			lastdegree: this.state.lastdegree, 
			university: this.state.university, 
			resume: this.state.resume,
			username: this.state.username
		}

		profile(userprofile).then(res => {
				if(res){
						this.props.history.push('/')
				}
		})
	}

	render() { 
		return (
			<div className="container">
				<div className="jumbotron mt-5">
					<div className="col-sm8- mx-auto">
						<form noValidate onSubmit={this.onSubmit}>
							<label htmlFor="firstname">Firstname</label>
							<input 
									type="text"
									className="form-control" 
									name="firstname" 
									placeholder="firstname"
									value={this.state.firstname} 
									onChange={this.onChange}   
							/>

							<label htmlFor="lastname">Lastname</label>
							<input 
									type="text"
									className="form-control" 
									name="lastname" 
									placeholder="lastname"
									value={this.state.lastname} 
									onChange={this.onChange}   
							/>

							<label htmlFor="yearofgrad">Year of Graduation</label>
							<input 
									type="text"
									className="form-control" 
									name="yearofgrad" 
									placeholder="yearofgrad"
									value={this.state.yearofgrad} 
									onChange={this.onChange}   
							/>

							<label htmlFor="linkedinprofile">Linkedin Profile</label>
							<input 
									type="text"
									className="form-control" 
									name="linkedinprofile" 
									placeholder="linkedinprofile"
									value={this.state.linkedinprofile} 
									onChange={this.onChange}   
							/>

							<label htmlFor="lastdegree">Last degree</label>
							<input 
									type="text"
									className="form-control" 
									name="lastdegree" 
									placeholder="lastdegree"
									value={this.state.lastdegree} 
									onChange={this.onChange}   
							/>

							<label htmlFor="university">University</label>
							<input 
									type="text"
									className="form-control" 
									name="university" 
									placeholder="university"
									value={this.state.university} 
									onChange={this.onChange}   
							/>

							<button type="submit" className="btn btn-lg btn-primary btn-block">
									Update
							</button>
						</form>
					</div>  
				</div>
			</div>
	 );
	}
}
 
export default Profile;
