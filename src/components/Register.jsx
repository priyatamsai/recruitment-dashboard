import React, { Component } from 'react';
import {register} from './userFunctions';

class Register extends Component {
    constructor(){
        super()
        this.state ={
            firstname: '',
            email: '',
            password: '',
            errors: {}
        }

        this.onChange =this.onChange.bind(this)
        this.onSubmit =this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState( { [e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const newUser = {
            firstname: this.state.firstname,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            if(res){
                this.props.history.push('/login')
            }
        })
    }
    render() { 
        return ( 
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm8- mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>

                            <label htmlFor="email">First name</label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="firstname" 
                                placeholder="name"
                                value={this.state.firstname} 
                                onChange={this.onChange}   
                            />

                            <label htmlFor="email">Email address</label>
                            <input 
                                type="email"
                                className="form-control" 
                                name="email" 
                                placeholder="enter email"
                                value={this.state.email} 
                                onChange={this.onChange}   
                            />

                            <label htmlFor="password">password</label>
                            <input 
                                type="password"
                                className="form-control" 
                                name="password" 
                                placeholder="password"
                                value={this.state.password} 
                                onChange={this.onChange}   
                            />

                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Register
                            </button>
                        </form>
                    </div>  
                </div>
            </div>
         );
    }
}
 
export default Register;