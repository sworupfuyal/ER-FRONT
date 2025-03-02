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
        throw error.response?.data || error.message; // Handle errors
    }
};

export const login = async (userData) => {
    try {
        const response = await api.post('/login', userData);
        return response.data; // Return the response data for further processing
    } catch (error) {
        throw error.response?.data || error.message; // Handle errors
    }
};

// Function for submitting property details (sell property)
export const sellProperty = async (propertyData) => {
    try {
        const response = await api.post('/properties/sell', propertyData, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message; // Handle errors
    }
};

// Function for buying a property
export const buyProperty = async (propertyId, buyerData) => {
    try {
        // Ensure the propertyId is being passed correctly in the URL
        const response = await api.post(`/properties/buy/${propertyId}`, buyerData, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data; // Return the response data for further processing
    } catch (error) {
        throw error.response?.data || error.message; // Handle errors
    }
};

export default api;
