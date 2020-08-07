import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localHost:3333',
})

export default api;