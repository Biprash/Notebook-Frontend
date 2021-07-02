import axios from 'axios';

const headers = {
    "Access-Control-Allow-Credentials": true,
    Accept: "application/json",
};

const baseURL = process.env.DOMAIN;

const server = axios.create({
    baseURL : baseURL,
    headers :headers,
    withCredentials: true,
});

export default server;