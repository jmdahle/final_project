import axios from 'axios';

export default {
    // API Server requests
    registerUser: function(userData) {
        return axios.post('/api/user', userData);
    },

    authenticateUser: function(loginData) {
        return axios.post('/api/user/login', loginData);
    }
}