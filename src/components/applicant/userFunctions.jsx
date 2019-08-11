import axios from 'axios';

export const register = newUser => {
	return axios
		.post('/register', {
			username: newUser.username,
			email: newUser.email,
			typ: newUser.typ,
			password: newUser.password
		}, { headers: { 'Content-Type': 'application/json'}})
		.then(response =>{
			console.log('Registered in site!!')
			//console.log(response.data)
			return response.data
		})
}

export const login = user => {
	return axios
		.post('/login', {
			username: user.username,
			password: user.password
		})
		.then(response =>{
			//console.log('logging in site!!')
			var res = response.data
			localStorage.setItem('usertoken',res.username)
			console.log(res.username)
			return response.data
		})
		.catch(err => {
			console.log(err)
		})
}

export const profile = user => {
	return axios
		.post('/profile', {
			username: user.username,
			firstname: user.firstname,
			lastname: user.lastname,
			yearofgrad: user.yearofgrad,
			linkedinprofile: user.linkedinprofile, 
			lastdegree: user.lastdegree, 
			university: user.university, 
			resume: user.resume
			})
		.then(response =>{
			console.log('updating the profile!!')
			//console.log(response.data)
			return response.data
		})
		.catch(err => {
			console.log(err)
		})
}

export const getJobs = () => {
	return axios
		.post('/jobs', {
				
		})
		.then(response =>{
			console.log(response.data)
			return response.data
		})
		.catch(err => {
			console.log(err)
		})
}

export const getProfileData = username => {
	return axios
		.post('/getprofile', {
			username: username
		})
		.then(response =>{
			console.log(response.data)
			return response.data
		})
		.catch(err => {
			console.log(err)
		})
}

export const getAppliedJobs = username => {
	return axios
		.post('/getjobs', {
			username: username
		})
		.then(response =>{
			console.log(response.data)
			return response.data
		})
		.catch(err => {
			console.log(err)
		})
}