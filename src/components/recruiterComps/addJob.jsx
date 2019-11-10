import React, { Component } from 'react';
//import PreferredQauls from './prefferred_quals';

import {addJob} from './userFunctions';

class AddJob extends Component {
    constructor(){
        super()
        this.state ={
            title: '',
            experience: '',
            description: '',
            company: '',
            numOpenings: '',
            pref_quals: []
        }

        this.onChange =this.onChange.bind(this)
        this.onSubmit =this.onSubmit.bind(this)
    }

    onChange(e){
        if(e.target.name === 'pref_quals'){
            //https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-reactjs   --> look at this for info
            this.setState({pref_quals: [...this.state.pref_quals, e.target.value] }    )
            
            //console.log(this.state[e.target.name])
        }else{
            this.setState( { [e.target.name]: e.target.value})
            console.log("improper",this.state)
        }
    }

    onSubmit(e){
        e.preventDefault()

        const job = {
            title: this.state.title,
            experience: this.state.experience,
            description: this.state.description,
            company: this.state.company
        }

        addJob(job).then(res => {
            if(res){
                console.log(res)
                /*this.state ={
                    title: '',
                    experience: '',
                    description: '',
                    numOpenings: ''
                }*/
            }
        })
    }
    render() { 
        const QualItem = (props) => {
			return(
			 <div>
				<span>{props.qual_name}</span>
			 </div>
			);
		}
        const PrefList =(props) => {
            console.log(props.quals)
			return(
				<div>
					{props.quals.map((qual) => <span>{qual}</span>)}
				</div>
			);
		} 
        return ( 
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm8- mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <label htmlFor="title">Job Title</label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="title" 
                                placeholder="enter title"
                                value={this.state.title} 
                                onChange={this.onChange}   
                            />

                            <label htmlFor="description">Job Description</label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="description" 
                                placeholder="enter description"
                                value={this.state.description} 
                                onChange={this.onChange}   
                            />

                            <label htmlFor="experience">Experience</label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="experience" 
                                placeholder="enter experience"
                                value={this.state.experience} 
                                onChange={this.onChange}   
                            />

                            <label htmlFor="company">Company</label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="company" 
                                placeholder="enter experience"
                                value={this.state.company} 
                                onChange={this.onChange}   
                            />
                            <select name="pref_quals" onChange={this.onChange} className="form-control">
                                <option value="0">None</option>
                                <option value="1">c</option>
                                <option value="2">c++</option>
                                <option value="3">java</option>
                            </select>
                            
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Add Job
                            </button>
                        </form>
                        <div className="card">
                            <PrefList quals={this.state.pref_quals}/> 
                        </div>
                    </div>  
                </div>
            </div>
         );
    }
}
 
export default AddJob;