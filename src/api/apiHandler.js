import { data } from 'autoprefixer';
import axios from 'axios';

const baseUrl = "http://localhost:8080";

const headers = {
    'Content-Type': 'application/json',
    'Accept': '*/*'
  }

export const authenticate = async (username, password) => {
    return axios.post(
        baseUrl + "/login",
        JSON.stringify({
            "username": username,
            "password": password
        }),
        { headers: headers }
    )
}

export const getAllUsers = async (token) => {
    return axios.get(
        baseUrl + "/users",
        { headers: {...headers, 'Authorization': token } }
    )
}