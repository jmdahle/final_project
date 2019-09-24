import axios from 'axios';

export default {
    // API Server requests
    registerUser: function(userData) {
        return axios.post('/api/user', userData);
    },

    authenticateUser: function(loginData) {
        return axios.post('/api/user/login', loginData);
    },

    addCategory: function(categoryData) {
        console.log('API request - addCategory');
        return axios.post('/api/category', categoryData);
    },

    getCategories: function() {
        console.log('API request - getCategories');
        return axios.get('/api/category');
    },

    addGoal: function(goalData) {
        console.log('API request - addGoal');
        return axios.post('/api/goal', goalData);
    },
    getGoalsInCategory: function(categoryId) {
        console.log('API request - getGoalsInCategory');
        return axios.get('/api/goal/' + categoryId);
    }
}