import { data } from 'autoprefixer';
import axios from 'axios';

const baseUrl = "http://localhost:8080";

export const authenticate = async (username, password) => {
    return axios.post(
        baseUrl + "/login",
        {
            "username": username,
            "password": password
        }
    )
}

export const getAllUsers = () => {
    axios.get(baseUrl + "/users")
    .then(function (response) {
        return true
    })
    .catch(function (error) {
        return false
    })
}