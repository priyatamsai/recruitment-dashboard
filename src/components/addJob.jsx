import React, { Component } from 'react';

import {addJob} from './userFunctions';

class AddJob extends Component {
    constructor(){
        super()
        this.state ={
            title: '',
            experience: '',
            description: '',
            company: '',
            numOpenings: ''
        }

        this.onChange =this.onChange.bind(this)
        this.onSubmit =this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState( { [e.target.name]: e.target.value})
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

                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Add Job
                            </button>
                        </form>
                    </div>  
                </div>
            </div>
         );
    }
}
 
export default AddJob;