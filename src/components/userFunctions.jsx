import axios from 'axios';

export const register = newUser => {
    return axios
        .post('users/register', {
            first_name: newUser.first_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(response =>{
            console.log('Registered in site!!')
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            first_name: user.first_name,
            email: user.email,
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