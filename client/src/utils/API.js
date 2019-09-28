import axios from 'axios';

export default {
    // API Server requests
    registerUser: function(userData) {
        return axios.post('/api/user', userData);
    },

    authenticateUser: function(loginData) {
        return axios.post('/api/user/login', loginData);
    },

    getUserDetails: function(userId) {
        console.log('API request - getUserDetails');
        return axios.get('/api/user/' + userId);
    },

    addCategory: function(categoryData) {
        console.log('API request - addCategory');
        return axios.post('/api/category', categoryData);
    },

    getCategories: function() {
        console.log('API request - getCategories');
        return axios.get('/api/category');
    },
    getCategoryMatch: function(categoryId) {
        console.log('API request - getCategoryMatch');
        return axios.get('/api/category/' + categoryId);
    },

    addGoal: function(goalData) {
        console.log('API request - addGoal');
        return axios.post('/api/goal', goalData);
    },
    getGoalsInCategory: function(categoryId) {
        console.log('API request - getGoalsInCategory');
        return axios.get('/api/goal/cat/' + categoryId);
    },
    getGoalMatch: function(goalId) {
        console.log('API request - getGoalMatch');
        return axios.get('/api/goal/' + goalId);
    },

    addTask: function(taskData) {
        console.log('API request - addTask');
        return axios.post('/api/task', taskData);
    },
    getTasksInGoal: function(goalId) {
        console.log('API request - getTasksInGoal');
        return axios.get('/api/task/' + goalId);
    },

    addUserGoal: function(userGoalData) {
        console.log('API request - addUserGoal');
        return axios.post('/api/usergoal', userGoalData);
    },
    getUserGoalByUser: function(userId) {
        console.log('API request - getUserGoalByUser');
        return axios.get('/api/usergoal/user/' + userId);
    },
    appendUserGoal: function(userId, userGoalData) {
        console.log('API request - appendUserGoal');
        return axios.put('/api/usergoal/user/' + userId, userGoalData);
    }
}