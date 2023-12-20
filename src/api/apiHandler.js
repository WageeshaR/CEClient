import { data } from 'autoprefixer';
import axios from 'axios';

const baseUrl = "http://localhost:8080";

export const authenticate = async (username, password) => {
    axios.post(
        baseUrl + "/login",
        {
            "username": username,
            "password": password
        }
    ).
    then(function (response) {
        return true
    }).
    catch(function (error) {
        return false
    })
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