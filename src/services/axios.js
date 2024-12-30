import axios from 'axios';
import { authStore } from '../stores/authStore'; // Import your user store for token management

// Set the base URL globally
axios.defaults.baseURL = 'http://localhost:5000/api/';

// Set the default content type for all requests
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Add a request interceptor globally
axios.interceptors.request.use(
    (config) => {
        const auth = authStore(); // Access the user store
        const token = auth.token; // Get the token from the store, if available
        // Attach token if the request requires authentication
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



export default axios;