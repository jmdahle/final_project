import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import components that appear on every page
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
// import top level pages that get displayed from routes
import Error404 from './pages/Error404';
import Register from './pages/Register';
import Home from './pages/Home';
import Manage from './pages/Manage';
import AddGoal from './pages/AddGoal';
import Progress from './pages/Progress';
// import Test from './pages/Test';
import Admin from './pages/Admin';

// import client API
import API from './utils/API';

class App extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        categoryName: '',
        categoryTagLine: '',
        categoryImgSrc: '',
        categories: [],
        categoryId: '',
        goalName: '',
        goalId: '',
        goals: [],
        taskName: '',
        tasks: [],
        weeklyTarget: '7',
        totalTarget: '7',
        isAuthenticated: false,
        showLogin: false,
        failedLoginAttempts: 0,
    }

    componentDidMount = () => {
        this.getCategories()
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        // when categoryId changes, load the goals for that category
        if (event.target.name === 'categoryId') {
            this.getGoalsInCategory(event.target.value)
        }
        // when goalId changes, load the tasks for that goal
        if (event.target.name === 'goalId') {
            this.getTasksInGoal(event.target.value)
        }
    }

    handleLoginFormSubmit = event => {
        event.preventDefault();
        console.log('login submit clicked')
        let loginData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(loginData);
        API.authenticateUser(loginData)
            .then( jsonData => {
                let userData = jsonData.data;
                console.log(userData);
                if (userData.length === 0) {
                    console.log('login failed');
                    let failedCount = this.state.failedLoginAttempts + 1;
                    this.setState({
                        failedLoginAttempts: failedCount,
                        email: '',
                        password: '',
                        isAuthenticated: false,                
                    })
                    } else if (userData.length === 1) {
                    console.log('login successful')
                    this.setState({
                        loginMessage: '', 
                        firstName: userData[0].firstName,
                        lastName: userData[0].lastName,
                        email: userData[0].email
                    });
                    this.setUserSession(userData[0]._id);
                } else {
                    console.log('WTF??!  How did you get more than 1??')
                }
            })
            .catch( error => {
                console.log( error );
            });
    }

    handleCategoryFormSubmit = event => {
        event.preventDefault();
        console.log('submit category clicked');
        let categoryData = {
            categoryName: this.state.categoryName,
            categoryTagLine: this.state.categoryTagLine,
            categoryImgSrc: this.state.categoryImgSrc
        }
        console.log(categoryData);
        API.addCategory(categoryData)
            .then(jsonData => {
                this.getCategories();
                console.log(jsonData);
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleGoalFormSubmit = event => {
        event.preventDefault();
        console.log('submit goal clicked');
        let goalData = {
            categoryId: this.state.categoryId,
            goalName: this.state.goalName
        }
        console.log(goalData);
        API.addGoal(goalData)
            .then(jsonData => {
                console.log(jsonData);
                this.getGoalsInCategory(this.state.categoryId);
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleTaskFormSubmit = event => {
        event.preventDefault();
        console.log('submit task clicked');
        let taskData = {
            goalId: this.state.goalId,
            taskName: this.state.taskName,
            weeklyTarget: parseInt(this.state.weeklyTarget),
            totalTarget: parseInt(this.state.totalTarget)
        }
        console.log(taskData);
        API.addTask(taskData)
            .then(jsonData => {
                console.log(jsonData);
                this.getTasksInGoal(this.state.goalId);
            })
            .catch(error => {
                console.log(error);
            });
    }

    getCategories = () => {
        console.log('loading category options');
        API.getCategories()
            .then(jsonData => {
                console.log(jsonData)
                this.setState({
                    categories: jsonData.data
                })
            });
    }

    getGoalsInCategory = (categoryId) => {
        console.log('loading goals for category ' + categoryId);
        API.getGoalsInCategory(categoryId)
            .then(jsonData => {
                console.log(jsonData)
                this.setState({
                    goals: jsonData.data
                })
            });
    }

    getTasksInGoal = (goalId) => {
        console.log('loading tasks for goal ' + goalId);
        API.getTasksInGoal(goalId)
            .then(jsonData => {
                console.log(jsonData)
                this.setState({
                    tasks: jsonData.data
                })
            });
    }

    setUserSession = (key) => {
        localStorage.setItem('userKey', key);
        this.setState({
            isAuthenticated: true,
            showLogin: false
        });
    }

    logoutClick = () => {
        console.log('logging out...');
        localStorage.setItem('userKey', '');
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isAuthenticated: false,
            showLogin: false,
            failedLoginAttempts: 0,
        });
    }

    loginClick = () => {
        console.log('logging in...');
        this.setState({
            showLogin: true
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar 
                        isAuthenticated={this.state.isAuthenticated}
                        handleLogout={this.logoutClick}
                        handleLogin={this.loginClick}
                        firstName={this.state.firstName}
                    />
                    <LoginForm
                        email={this.state.email}
                        password={this.state.password} 
                        showLogin={this.state.showLogin}
                        failedLoginAttempts={this.state.failedLoginAttempts}
                        handleOnChange={this.handleOnChange}
                        handleLoginFormSubmit={this.handleLoginFormSubmit}
                        />
                    <Switch>
                        <Route exact path='/' render={
                            (props) => <Home {...props} 
                            />}
                        />
                        <Route exact path='/register' render={(props) => <Register {...props}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            email={this.state.email}
                            password={this.state.password}
                            handleOnChange={this.handleOnChange}
                            setUserSession={this.setUserSession}
                            />}
                        />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/manage' component={Manage} />
                        <Route exact path='/addgoal' component={AddGoal} />
                        <Route exact path='/progress' component={Progress} />
                        {/* <Route exact path='/test' render={(props) => <Test {...props}
                            handleOnChange={this.handleOnChange}
                            />}
                        /> */}
                         <Route exact path='/admin' render={(props) => <Admin {...props}
                            categoryId={this.state.categoryId}
                            categoryName={this.state.categoryName}
                            categoryTagLine={this.state.categoryTagLine}
                            categoryImgSrc={this.state.categoryImgSrc}
                            categories={this.state.categories}
                            getCategories={this.getCategories}
                            goalId={this.state.goalId}
                            goals={this.state.goals}
                            getGoalsInCategory={this.getGoalsInCategory}
                            handleOnChange={this.handleOnChange}
                            handleCategoryFormSubmit={this.handleCategoryFormSubmit}
                            handleGoalFormSubmit={this.handleGoalFormSubmit}
                            taskName={this.state.taskName}
                            tasks={this.state.tasks}
                            weeklyTarget={this.state.weeklyTarget}
                            totalTarget={this.state.totalTarget}
                            handleTaskFormSubmit={this.handleTaskFormSubmit}
                            />}
                        />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
