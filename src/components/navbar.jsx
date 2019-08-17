import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class Landing extends Component {
	state = {  }
	logOut(e){
		e.preventDefault()
		localStorage.removeItem('usertoken')
		this.props.history.push('/')
	}
	render() { 
		const loginRegLink = (
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/login" className="nav-link">
						Login
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/register" className="nav-link">
						Register
					</Link>
				</li>
			</ul>
		)
		const userLink = (
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/profile" className="nav-link">
						{localStorage.usertoken}
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/applied" className="nav-link">
						Applied
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/getjobs" className="nav-link">
						Jobs
					</Link>
				</li>
				<li className="nav-item">
					<a href="" onClick={this.logOut.bind(this)} className="nav-link">
						Logout
					</a>
				</li>
			</ul>
		)
		const recLink = (
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/recProfile" className="nav-link">
						{localStorage.usertoken}
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/addjob" className="nav-link">
						Add Job
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/listjobs" className="nav-link">
						Added openings
					</Link>
				</li>
				<li className="nav-item">
					<a href="" onClick={this.logOut.bind(this)} className="nav-link">
						Logout
					</a>
				</li>
			</ul>
		)
		return ( 
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
				<a className="navbar-brand" href="#">Recruitment-dashboard</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
					</ul>
					{localStorage.usertoken ? userLink : loginRegLink}
				</div>
			</nav>
		);
	}
}
 
export default withRouter(Landing);