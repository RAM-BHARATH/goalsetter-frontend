import axios from 'axios'


const PROXY= 'https://goalsetter.cyclic.app'

const API_URL = PROXY+'/api/users'

// Register User
const register = async(userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login User
const login = async(userData) => {
    const response = await axios.post(API_URL + '/login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout User
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService