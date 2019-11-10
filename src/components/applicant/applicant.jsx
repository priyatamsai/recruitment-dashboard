import React, { Component } from 'react';
import {getJobs, applyJob} from './userFunctions';

class applicant extends Component {
	constructor(props){
		super(props)
		this.state={
			jobs: [],
			// currently below 2 attributes are not used.
			apply_for_job: false,
			apply_job_id: -1
		}
		this.submit = this.submit.bind(this)
		this.start_apply_job = this.start_apply_job.bind(this)
	}

	submit(e){
		e.preventDefault()
		getJobs().then(res => {
					if(res){
							this.setState({jobs:res})
					}
		})
	}

	start_apply_job(job_id){
		//this.setState({apply_for_job: true})
		applyJob(localStorage.applicanttoken,job_id).then(
			this.props.history.push('/applied')
		)
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
				<button onClick={() => this.start_apply_job(props.id)}>Apply</button>
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

		let showContent;

        if(this.state.showStat === false){
            showContent = <JobList jobs = {this.state.jobs}/>;
        } else{
			//showContent = <ApplyJob job_id = {this.state.jobs}/>;
			showContent = <JobList jobs = {this.state.jobs}/>;
        }

		return ( 
			<div className="container">
				<button type="submit" onClick={this.submit} className="btn btn-lg btn-primary btn-block">
				Get Jobs
				</button>
				{showContent}
			</div>
		);//<JobList jobs = {this.state.jobs} />
	}
}
 
export default applicant;