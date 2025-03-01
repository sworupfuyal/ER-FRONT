import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust the port if necessary
});

// Set auth token in headers
const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete api.defaults.headers.common['x-auth-token'];
    }
};

export const signup = async (userData) => {
    try {
        const response = await api.post('/signup', userData);
        return response.data; // Return the response data for further processing
    } catch (error) {
        throw error.response?.data || error.message; // Throw the error for handling in the component
    }
};

export const login = async (userData) => {
    try {
        const response = await api.post('/login', userData);
        return response.data; // Return the response data for further processing
    } catch (error) {
        throw error.response?.data || error.message; // Throw the error for handling in the component
    }
};

export default api;