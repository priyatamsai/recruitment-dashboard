import React, { Component } from 'react';
import {getJobs} from './userFunctions';

class applicant extends Component {
	constructor(props){
		super(props)
		this.state={
			jobs: [],
			apply_for_job: false,
			apply_job_id: -1
		}
		this.submit = this.submit.bind(this)
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

	start_apply_job(id){
		this.state.apply_for_job=true
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
				
				<JobList jobs = {this.state.jobs} />
			</div>
		);
	}
}
 
export default applicant;