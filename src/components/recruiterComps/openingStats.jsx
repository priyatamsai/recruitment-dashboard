import React, { Component } from 'react';

class OpeningStats extends Component {
    state = { 
        applicants: []
     }
    componentDidMount() {
        getApplicants(this.props.id).then(res => {
            if(res){
                    this.setState({applicants:res})
            }
		})
    }
    
    render() { 
		const ApplicantItem = (props) => {
			return(
			 <div>
				<span>{props.id}</span>
				<span>{props.name}</span>
				<span>{props.college}</span>
				<span>{props.experience}</span> 
			 </div>
			);
		}

		const ApplicantList =(props) => {
			return(
				<div>
					{props.applicants.map((applicant) => <ApplicantItem key={applicant.id} {...applicant}/>)}
				</div>
			);
		}

		return ( 
			<div className="container">
				<ApplicantList applicants = {this.state.applicants} />
			</div>
		);
	}
}
 
export default OpeningStats;