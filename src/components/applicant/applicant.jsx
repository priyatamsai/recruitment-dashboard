import React, { Component } from 'react';
import {getJobs} from './applicant/userFunctions';

class applicant extends Component {
	constructor(props){
		super(props)
		this.state={
			jobs: []
		}
		this.submit = this.submit.bind(this)
	}

	submit(e){
		e.preventDefault()
		getJobs().then(res => {
					if(res){
							this.setState({jobs:res})
					}
		})
	}

	render() { 
		const JobItem = (props) => {
			return(
			 <div>
				<span>{props.id}</span>
				<span>{props.company}</span>
				<span>{props.description}</span>
				<span>{props.experience}</span> 
				<span>{props.title}</span>
				<span>{props.recruterid}</span>
			 </div>
			);
		}

		const JobList =(props) => {
			return(
				<div>
					{props.jobs.map((job) => <JobItem key={job.id} {...job}/>)}
				</div>
			);
		}

		return ( 
			<div className="container">
				<button type="submit" onClick={this.submit} className="btn btn-lg btn-primary btn-block">
				Get Jobs
				</button>
				
				<JobList jobs = {this.state.jobs} />
			</div>
		);
	}
}
 
export default applicant;