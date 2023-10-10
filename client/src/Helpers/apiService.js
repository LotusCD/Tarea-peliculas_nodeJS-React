import axios from 'axios';
import { API_BASE_URL } from '../config';

// Create an Axios instance with a base URL and any other global settings
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    // You can add other global settings here, like timeouts or interceptors
});

export const apiService = {
    get: (endpoint, options) => axiosInstance.get(endpoint, options),
    
    post: (endpoint, body, options) => axiosInstance.post(endpoint, body, options),
    
    put: (endpoint, body, options) => axiosInstance.put(endpoint, body, options),
    
    delete: (endpoint, options) => axiosInstance.delete(endpoint, options)
};
