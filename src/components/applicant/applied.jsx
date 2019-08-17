import React, { Component } from 'react';
import {getAppliedJobs} from './userFunctions';

class applicant extends Component {
	constructor(props){
		super(props)
		this.state={
			username: localStorage.usertoken,
			jobs: []
		}
	}

	componentDidMount(){
		getAppliedJobs(this.state.username).then(res => {
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
				<span>{props.status}</span>
				<span>{props.title}</span>
				<span>{props.description}</span> 
				<span>{props.experince}</span>
				<span>{props.company}</span>
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
				<JobList jobs = {this.state.jobs} />
			</div>
		);
	}
}
 
export default applicant;