import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import components that appear on every page
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
// import top level pages that get displayed from routes
import HelloWorld from './pages/HelloWorld';
import Error404 from './pages/Error404';
import Register from './pages/Register';
import Home from './pages/Home';
import Manage from './pages/Manage';
import AddGoal from './pages/AddGoal';
import Progress from './pages/Progress';
import Test from './pages/Test';

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
                        {/* <Route exact path='/' component={HelloWorld} /> */}
                        <Route exact path='/' render={
                                (props) => <HelloWorld {...props} />
                            }
                        />
                        <Route exact path='/register' render={(props) => <Register {...props}  
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            email={this.state.email}
                            password={this.state.password}
                            handleOnChange={this.handleOnChange}
                            // handleRegisterFormSubmit={this.handleRegisterFormSubmit}
                            setUserSession={this.setUserSession}
                            />}
                        />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/manage' component={Manage} />
                        <Route exact path='/addgoal' component={AddGoal} />
                        <Route exact path='/progress' component={Progress} />
                        <Route exact path='/test' render={(props) => <Test {...props}
                            categoryId={this.state.categoryId}
                            categoryName={this.state.categoryName}
                            categoryTagLine={this.state.categoryTagLine}
                            categoryImgSrc={this.state.categoryImgSrc}
                            categories={this.state.categories}
                            getCategories={this.getCategories}
                            handleOnChange={this.handleOnChange}
                            handleCategoryFormSubmit={this.handleCategoryFormSubmit}
                            handleGoalFormSubmit={this.handleGoalFormSubmit}
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
