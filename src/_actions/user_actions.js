import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
} from './types';
import { USER_SERVER } from '../Config.js';

export function registerUser(dataToSubmit){
    const res = axios.post(`${USER_SERVER}/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: res
    }
}

export function loginUser(dataToSubmit){
    const res = axios.post(`${USER_SERVER}/login`,dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: res
    }
}

export function authUserAction(){
    const res = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: res
    }
}

export function logoutUser(){
    const res = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data);
    return {
        type: LOGOUT_USER,
        payload: res
    }
}

