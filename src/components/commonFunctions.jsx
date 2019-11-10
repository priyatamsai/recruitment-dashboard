import axios from 'axios';

export const login = user => {
	return axios
		.post('/login', {
			username: user.username,
			password: user.password
		})
		.then(response =>{
			//console.log('logging in site!!')
			var res = response.data
			if(res.type == 1){
				localStorage.setItem('applicanttoken',res.username)
			}else if (res.type == 2){
				localStorage.setItem('rectoken',res.username)
			}

			console.log(res.username)
			return response.data
		})
		.catch(err => {
			console.log(err)
		})
}

export const logout = () => {
	return axios
		.post('/logout')
		.then(response =>{
			//console.log('logging in site!!')
			var res = response.data
			localStorage.setItem('rectoken',res.username)
			console.log(res.username)
			return response.data
		})
		.catch(err => {
			console.log(err)
		})
}

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