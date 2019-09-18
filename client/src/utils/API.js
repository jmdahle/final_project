import axios from 'axios';

export default {
    // API Server requests
    registerUser: function(userData) {
        return axios.post('/api/user', userData);
    }
}