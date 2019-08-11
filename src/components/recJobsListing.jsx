import React, { Component } from 'react';
import JobOpening from './jobOpening';
import {fetchMyOpenings} from './userFunctions';
class RecJobListing extends Component {
    state = { 
        jobs: []
     }
     constructor(){
        super()
        
        this.onSubmit = this.onSubmit.bind(this)
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
    render() { 
        return ( 
            <div className="container">
                <button type="submit" onClick={this.onSubmit}>
                    Fetch my openings
                </button>

                {this.state.jobs.map( job => 
                <JobOpening 
                 key={job.id}
                 job = {job}>
                </JobOpening>)}

            </div>
         );
        
    }
}
 
export default RecJobListing;