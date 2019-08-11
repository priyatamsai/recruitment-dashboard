import axios from 'axios';

export const register = newUser => {
    console.log(newUser)
    return axios
        .post('register', {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            type: newUser.type
        })
        .then(response =>{
            console.log(response)
        })
}

export const login = user => {
    console.log("in login func.")
    return axios
        .post('login', {
            username: user.username,
            password: user.password
        })
        .then(response =>{
            console.log('logging in site!!')
            localStorage.setItem('usertoken',response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const addJob = job => {
    console.log("iiiiiiiiiiiiiiin add job func")
    console.log(job)
    return axios
        .post('addjobopening', {
            title: job.title,
            experience: job.experience,
            description: job.description,
            company: job.company
        })
        .then(response =>{
            console.log('adding in site!!')
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
    
}

export const fetchMyOpenings = () => {
    console.log("iiiiiiiiiiiiiiin fetch Opening func")
    return axios
        .get('fetchRecOpenings')
        .then(response =>{
            console.log('fetched from site!!')
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
    
}