import React, { Component } from 'react';
import JobOpening from './jobOpening';
import {fetchMyOpenings} from './userFunctions';
import OpeningStats from './openingStats';
class RecJobListing extends Component {
    state = { 
        jobs: [],
        showStat: false,
        jobId: 0
     }
     constructor(){
        super()
        
        this.onSubmit = this.onSubmit.bind(this)
        this.showMyStat = this.showMyStat.bind(this);
    }

    onSubmit(e){
        e.preventDefault()
        console.log("enter the submittttttttttttttt")
        fetchMyOpenings().then(res => {
            if(res){
                console.log(res.jobs)
                this.setState({jobs: res.jobs})
            }
        })
    }

    showMyStat(id){
        console.log(id)
        this.setState({showStat: true, jobId: id})
    }
    render() { 
        const jobsList = (
            <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Experience</th>
                            <th scope="col"> action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.jobs.map( job => 
                        <JobOpening 
                        key={job.id}
                        job = {job}
                        onShowStatus = {this.showMyStat}>
                        </JobOpening>)
                        }
                    </tbody>
                </table>
        )

        const jobStat = (
            <OpeningStats id={this.state.jobId} />
        )
        let showContent;

        if(this.state.showStat === false){
            showContent = jobsList;
        } else{
            showContent = jobStat;
        }
        return ( 
            <div className="container">
                <button type="submit" onClick={this.onSubmit}>
                    Fetch my openings
                </button>
                
                {showContent}

            </div>
         );
        
    }
}
 
export default RecJobListing;