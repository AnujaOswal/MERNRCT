import axios from "axios";

const url= 'http://localhost:5000'

const signin = async (user) =>{
    const result =  await axios.post(`${url}/users/auth/signin`,user)
    return result;
}

const signup = async (user) =>{
    const result =  await axios.post(`${url}/users/auth/signup`,user)
    return result;
}


export {
    signin , signup
}