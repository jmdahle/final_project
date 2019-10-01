import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import components that appear on every page
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";

// import top level pages that get displayed from routes
import Error404 from "./pages/Error404";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import AddGoal from "./pages/AddGoal";
import Progress from "./pages/Progress";
// import Test from './pages/Test';
import Admin from "./pages/Admin";

// import client API
import API from "./utils/API";

// moment js
const moment = require('moment');

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
        selectedCategory: {},
        categoryId: '',
        goalName: '',
        goalTagline: '',
        goalId: '',
        goals: [],
        selectedGoal: {},
        taskName: '',
        tasks: [],
        streakTarget: '7',
        totalTarget: '7',
        isAuthenticated: false,
        showLogin: false,
        failedLoginAttempts: 0,
        showTaskOverlay: false,
        showOkDialog: false,
        loginMessage: 'Log in or register to enhance your experience!',
        visualizerDates: [],
        userDetails:[],
        userGoals: []
    }

    componentDidMount = () => {
        this.resetState();
        let userId = localStorage.getItem('userKey');
        if (userId) {
            console.log('user key is ' + userId );
            this.getUserDetails(userId);
        } else {
            console.log('user key is missing!  No one is logged in');
            this.resetState();
        }
    }

    resetState = () => {
        // re-set state to beginning state
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            categoryName: '',
            categoryTagLine: '',
            categoryImgSrc: '',
            categories: [],
            selectedCategory: {},
            categoryId: '',
            goalName: '',
            goalTagline: '',
            goalId: '',
            goals: [],
            selectedGoal: {},
            taskName: '',
            tasks: [],
            streakTarget: '7',
            totalTarget: '7',
            isAuthenticated: false,
            showLogin: false,
            failedLoginAttempts: 0,
            showTaskOverlay: false,
            userDetails:[],
            userGoals: []
            });        
            // get initial categories
            this.getCategories();
            // set initial visualizer date range
            let now = moment().format('YYYY MM DD');
            let startDate = moment(now).subtract(6,'days');
            this.resetVisualizerDates(startDate,7);
    }

    resetVisualizerDates = (startDate, numDays) => {
        let dateArray = [];
        for (let i = 0; i < numDays; i++) {
            let thisDate = moment(startDate).add(i, 'days').format('YYYY-MM-DD').toString();
            dateArray.push(thisDate);
        }
        this.setState({
            visualizerDates: dateArray
        });
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        // when categoryId changes,
        // load the goals for that category
        // and populate the selectedCategory
        if (event.target.name === "categoryId") {
            this.getGoalsInCategory(event.target.value);
            this.getCategoryMatch(event.target.value);
            }
        // when goalId changes, load the tasks for that goal
        if (event.target.name === "goalId") {
            this.getTasksInGoal(event.target.value);
        }
    };

    handleLoginFormSubmit = event => {
    event.preventDefault();
    console.log("login submit clicked");
    let loginData = {
        email: this.state.email,
        password: this.state.password
    };
    console.log(loginData);
    API.authenticateUser(loginData)
        .then(jsonData => {
            let userData = jsonData.data;
            console.log(userData);
            if (userData.length === 0) {
                console.log("login failed");
                let failedCount = this.state.failedLoginAttempts + 1;
                this.setState({
                    failedLoginAttempts: failedCount,
                    email: "",
                    password: "",
                    isAuthenticated: false
                });
            } else if (userData.length === 1) {
                console.log("login successful");
                this.setState({
                    loginMessage: "",
                    firstName: userData[0].firstName,
                    lastName: userData[0].lastName,
                    email: userData[0].email
                });
                this.setUserSession(userData[0]._id);
            } else {
              console.log("WTF??!  How did you get more than 1??");
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    handleCategoryFormSubmit = event => {
        event.preventDefault();
        console.log("submit category clicked");
        let categoryData = {
            categoryName: this.state.categoryName,
            categoryTagLine: this.state.categoryTagLine,
            categoryImgSrc: this.state.categoryImgSrc
            };
        console.log(categoryData);
        API.addCategory(categoryData)
            .then(jsonData => {
                this.getCategories();
                console.log(jsonData);
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleTaskFormSubmit = event => {
        event.preventDefault();
        console.log('submit task clicked');
        let taskData = {
            goalId: this.state.goalId,
            taskName: this.state.taskName,
            streakTarget: parseInt(this.state.streakTarget),
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

    handleAddGoalFormSubmit = event => {
        event.preventDefault();
        console.log('Add User Goal');
        let userId = localStorage.getItem('userKey');
        if (userId) {
            // user is logged in
            let goalId = this.state.selectedGoal._id;
            let userGoalData = {
                userId: userId,
                goalId: goalId
            }
            API.addUserGoal(userGoalData)
                .then(jsonData => {
                    console.log(jsonData);
                })
                .catch(error => {
                    console.log(error);
                });
            this.setState({
                showTaskOverlay: false,
                showOkDialog: true
            });    
        } else {
            // user is NOT logged in
            // user must REGISTER or LOGIN
            this.setState({
                showLogin: true
            })
        }
    }

    handleGoalFormSubmit = event => {
        event.preventDefault();
        console.log("submit goal clicked");
        let goalData = {
            categoryId: this.state.categoryId,
            goalName: this.state.goalName,
            goalTagline: this.state.goalTagline,
        };
        console.log(goalData);
        API.addGoal(goalData)
            .then(jsonData => {
                console.log(jsonData);
                this.getGoalsInCategory(this.state.categoryId);
            })
            .catch(error => {
                console.log(error);
            });
    };

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

    getCategoryMatch = categoryId => {
        console.log("loading selected category with id " + categoryId);
        API.getCategoryMatch(categoryId).then(jsonData => {
            console.log(jsonData);
            this.setState({
                selectedCategory: jsonData.data[0],
                categoryId: categoryId
            });
        });
    };

    getGoalsInCategory = categoryId => {
        console.log("loading goals for category " + categoryId);
        API.getGoalsInCategory(categoryId).then(jsonData => {
            console.log(jsonData);
            this.setState({
                goals: jsonData.data
            });
        });
    };

    getGoalMatch = goalId => {
        console.log("loading selected goal with id " + goalId);
        API.getGoalMatch(goalId).then(jsonData => {
            console.log(jsonData);
            this.setState({
                selectedGoal: jsonData.data[0]
            });
        });
    };

    getTasksInGoal = goalId => {
        console.log("loading tasks for goal " + goalId);
        API.getTasksInGoal(goalId).then(jsonData => {
            console.log(jsonData);
            this.setState({
                tasks: jsonData.data
            });
        });
    };

    // getUserDetails = (userId) => {
    //     console.log('loading user details')
    //     API.getUserDetails(userId)
    //         .then(jsonData => {
    //             console.log(jsonData);
    //             let userData = jsonData.data;
    //             this.setState({
    //                 loginMessage: "",
    //                 userId: userId,
    //                 firstName: userData.firstName,
    //                 lastName: userData.lastName,
    //                 email: userData.email,
    //                 isAuthenticated: true,
    //                 userGoals: userData.userGoals
    //             });
    //         })
    // }

    getUserDetails = (userId) => {
        console.log('loading user details')
        API.getUserDetails(userId)
            .then( jsonData => {
                console.log(jsonData);
                let userData = jsonData.data;
                // form goal, task, and task completion items for state
                let userGoals = this.setupUserGoals(userData);
                // update state with user data
                this.setState({
                    loginMessage: "",
                    userId: userId,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    isAuthenticated: true,
                    userDetails: userData,
                    userGoals: userGoals,
                });
            })
    }

    setupUserGoals = (userData) => {
        // this appears to be needed because React sees the array nodes in the API results as Object rather than an array of Objects   
        let userGoals = [];
        let dbUserGoals = userData.userGoals;
        for (let g = 0; g < dbUserGoals.length; g ++) {
            console.log(dbUserGoals);
            let userGoalId = dbUserGoals[g]._id;
            let goalId = dbUserGoals[g].goalId._id;
            let goalName = dbUserGoals[g].goalId.goalName;
            let goalPercent = dbUserGoals[g].goalPercent;
            let userTasks = [];
            let dbUserTasks = dbUserGoals[g].goalId.tasks;
            for (let t = 0; t < dbUserTasks.length; t++) {
                let userTimeline = []
                let dbUserTimeline = userData.userGoals[g].taskTimelines;
                console.log(dbUserTimeline);
                for (let l = 0; l < this.state.visualizerDates.length; l++) {
                    // is the first date in the array of timeline
                    let currentDate = this.state.visualizerDates[l];
                    console.log('checking date' + currentDate);
                    let taskCompleted = false;
                    for (let ul = 0; ul < dbUserTimeline.length; ul++) {
                        if (
                                moment(dbUserTimeline[ul].taskDate).format('M/D/YYYY') === moment(currentDate).format('M/D/YYYY') &&
                                dbUserTimeline[ul].taskId === dbUserTasks[t]._id
                            ) {
                            taskCompleted = dbUserTimeline[ul].taskCompletedYN;
                        }
                    }
                    let timelineEntry = {
                        timelineDate: moment(currentDate).format('M/D/YYYY'),
                        taskCompletedYN: taskCompleted
                    }
                    userTimeline.push(timelineEntry);
                }
                let thisTask = {
                    'taskId': dbUserTasks[t]._id,
                    'taskName': dbUserTasks[t].taskName,
                    'taskStreakTarget': dbUserTasks[t].streakTarget,
                    'taskTotalTarget': dbUserTasks[t].totalTarget,
                    'taskCurrentStreak': 0,
                    'taskLongStreak': 0,
                    'taskTotalCompleted': 0,
                    'taskCompleteYN': false,
                    'userTimeline': userTimeline
                }
                // add thisTask to userTask array
                userTasks.push(thisTask);
            }
            let thisGoal = {
                'userGoalId': userGoalId,
                'goalId': goalId,
                'goalName': goalName,
                'goalPercent': goalPercent,
                'userTasks': userTasks
            }
            userGoals.push(thisGoal);
        }
        console.log(userGoals);

        //return userData.userGoals;
        return userGoals;
    }

    logoutClick = () => {
        console.log('logging out...');
        localStorage.setItem('userKey', '');
        this.resetState();
    }

    loginClose = () => {
        this.setState({
            showLogin: false
        });
    }

    loginClick = () => {
        console.log("logging in...");
        this.setState({
          showLogin: true
        });
    };

    markUserGoalComplete = () => {
        console.log('user completed their goal');
    };

    taskOverlayClose = () => {
        this.setState({
            showTaskOverlay: false
        })
    }

    setUserSession = key => {
        localStorage.setItem("userKey", key);
        this.setState({
            isAuthenticated: true,
            showLogin: false
        });
    };

    selectGoal = (goalId) => {
        console.log('clicked a goal card ' + goalId);
        // populate selectedGoal
        this.getGoalMatch(goalId);
        // get tasks for the selectedGoal
        this.getTasksInGoal(goalId);
        // show TaskOverlay
        this.setState({
            showTaskOverlay: true
        });
    }

    clearCategory = () => {
        this.setState({
            categoryId: '',
            selectedCategory: {},
            goals: [],
        })
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
                        handleLoginClose={this.loginClose}
                        message={this.state.loginMessage}
                        />
                    <Switch>
                        <Route exact path='/' render={
                            (props) => <Home {...props} 
                            categories={this.state.categories}
                            getCategoryMatch={this.getCategoryMatch}
                            />}
                        />
                        <Route exact path='/register' render={(props) => <Register {...props}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            email={this.state.email}
                            password={this.state.password}
                            handleOnChange={this.handleOnChange}
                            setUserSession={this.setUserSession}
                            loginClose={this.loginClose}
                            />}
                        />

                        <Route exact path='/addgoal' render={ (props) => <AddGoal {...props}
                                categoryId={this.state.categoryId}
                                selectedCategory={this.state.selectedCategory}
                                handleOnChange={this.handleOnChange}
                                getCategories={this.getCategories}
                                categories={this.state.categories} 
                                goals={this.state.goals}    
                                selectGoal={this.selectGoal}    
                                showTaskOverlay={this.state.showTaskOverlay}   
                                selectedGoal={this.state.selectedGoal}
                                tasks={this.state.tasks}
                                getCategoryMatch={this.getCategoryMatch}
                                getGoalsInCategory={this.getGoalsInCategory}
                                taskOverlayClose={this.taskOverlayClose}
                                handleAddGoalFormSubmit={this.handleAddGoalFormSubmit}
                                showOkDialog={this.state.showOkDialog}
                                clearCategory={this.clearCategory}
                            />}
                        />
                        <Route exact path="/manage" render={ (props) => <Manage {...props}
                                handleOnChange={this.handleOnChange}
                                userGoals={this.state.userGoals}
                                getUserDetails={this.getUserDetails}
                                selectGoal={this.selectGoal}    
                                showTaskOverlay={this.state.showTaskOverlay}   
                                selectedGoal={this.state.selectedGoal}
                                tasks={this.state.tasks}
                            />}
                        />

                        <Route exact path='/progress' render={ (props) => <Progress {...props} 
                                visualizerDates={this.state.visualizerDates}
                                resetVisualizerDates={this.resetVisualizerDates}
                            />}
                        />

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
                            streakTarget={this.state.streakTarget}
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