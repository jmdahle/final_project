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
        userDetails: {},
        streakTarget: '7',
        totalTarget: '7',
        isAuthenticated: false,
        showLogin: false,
        failedLoginAttempts: 0,
        showTaskOverlay: false,
        showOkDialog: false,
        loginMessage: 'Log in or register to enhance your experience!',
        visualizerDates: [],
        visualizerData: [],
        numVisualizerDays: 7,
        userGoals: []
    }

    componentDidMount = () => {
        this.resetState();
        let userId = localStorage.getItem('userKey');
        if (userId) {
            // console.log('user key is ' + userId );
            this.getUserDetails(userId);
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
            userDetails: {},
            streakTarget: '7',
            totalTarget: '7',
            isAuthenticated: false,
            showLogin: false,
            failedLoginAttempts: 0,
            showTaskOverlay: false,
            numVisualizerDays: 7,
            visualizerDates: [],
            visualizerData: [],
            userGoals: []
            });        
            // get initial categories
            this.getCategories();
            // set initial visualizer date range
            let now = moment().startOf('day').format('M/D/YYYY');
            let startDate = moment(now).subtract(this.state.numVisualizerDays - 1 ,'days');
            this.resetVisualizerDates(startDate,this.state.numVisualizerDays);
    }

    resetVisualizerDates = (startDate, numDays) => {
        let dateArray = [];
        for (let i = 0; i < numDays; i++) {
            let thisDate = moment(startDate).add(i, 'days').format('M/D/YYYY').toString();
            dateArray.push(thisDate);
        }
        this.setState({
            visualizerDates: dateArray
        });
    }

    changeVisualizerDates = (numdays) => {
        let startDate = moment(this.state.visualizerDates[0]).add(numdays,'days')
        let now = moment().startOf('day').format('M/D/YYYY');
        if (
            moment(now).subtract(this.state.numVisualizerDays - 1 ,'days') < moment(this.state.visualizerDates[0]).add(numdays,'days')
            ) {
                startDate = moment(now).subtract(this.state.numVisualizerDays - 1 ,'days')
            }
        this.resetVisualizerDates(startDate,this.state.numVisualizerDays);
        this.getUserDetails(localStorage.getItem('userKey'));
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

    handleCompleteTask = (taskId, userGoalId, date) => {
        // console.log(`completed taskId: ${taskId}; userGoalId: ${userGoalId}; date: ${date}`);
        let timelineData = {
            taskId: taskId,
            userGoalId: userGoalId,
            taskDate: date,
            taskCompletedYN: true
        }
        API.addTimeline(timelineData)
            .then(jsonData => {
                this.getUserDetails(localStorage.getItem('userKey'));
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleIncompleteTask = (timelineId) => {
        // console.log(`remove timelineId: ${timelineId}`);
        API.deleteTimeline(timelineId)
            .then(jsonData => {
                this.getUserDetails(localStorage.getItem('userKey'));
            })
            .catch(error => {
                console.log(error);
            })        
    }

    handleLoginFormSubmit = event => {
    event.preventDefault();
    // console.log("login submit clicked");
    let loginData = {
        email: this.state.email,
        password: this.state.password
    };
    // console.log(loginData);
    API.authenticateUser(loginData)
        .then(jsonData => {
            let userData = jsonData.data;
            // console.log(userData);
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
                // console.log("login successful");
                this.setState({
                    loginMessage: "",
                    firstName: userData[0].firstName,
                    lastName: userData[0].lastName,
                    email: userData[0].email
                });
                this.setUserSession(userData[0]._id);
                this.getUserDetails(userData[0]._id);
                this.setupUserGoals(this.state.userGoals)
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
        // console.log("submit category clicked");
        let categoryData = {
            categoryName: this.state.categoryName,
            categoryTagLine: this.state.categoryTagLine,
            categoryImgSrc: this.state.categoryImgSrc
            };
        // console.log(categoryData);
        API.addCategory(categoryData)
            .then(jsonData => {
                this.getCategories();
                // console.log(jsonData);
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleTaskFormSubmit = event => {
        event.preventDefault();
        // console.log('submit task clicked');
        let taskData = {
            goalId: this.state.goalId,
            taskName: this.state.taskName,
            streakTarget: parseInt(this.state.streakTarget),
            totalTarget: parseInt(this.state.totalTarget)
        }
        // console.log(taskData);
        API.addTask(taskData)
            .then(jsonData => {
                // console.log(jsonData);
                this.getTasksInGoal(this.state.goalId);
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleAddGoalFormSubmit = event => {
        event.preventDefault();
        // console.log('Add User Goal');
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
                    // console.log(jsonData);
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
        // console.log("submit goal clicked");
        let goalData = {
            categoryId: this.state.categoryId,
            goalName: this.state.goalName,
            goalTagline: this.state.goalTagline,
        };
        // console.log(goalData);
        API.addGoal(goalData)
            .then(jsonData => {
                // console.log(jsonData);
                this.getGoalsInCategory(this.state.categoryId);
            })
            .catch(error => {
                console.log(error);
            });
    };

    getCategories = () => {
        // console.log('loading category options');
        API.getCategories()
            .then(jsonData => {
                // console.log(jsonData)
                this.setState({
                    categories: jsonData.data
                })
            });
    }

    getCategoryMatch = categoryId => {
        // console.log("loading selected category with id " + categoryId);
        API.getCategoryMatch(categoryId).then(jsonData => {
            // console.log(jsonData);
            this.setState({
                selectedCategory: jsonData.data[0],
                categoryId: categoryId
            });
        });
    };

    getGoalsInCategory = categoryId => {
        // console.log("loading goals for category " + categoryId);
        API.getGoalsInCategory(categoryId).then(jsonData => {
            // console.log(jsonData);
            this.setState({
                goals: jsonData.data
            });
        });
    };

    getGoalMatch = goalId => {
        // console.log("loading selected goal with id " + goalId);
        API.getGoalMatch(goalId).then(jsonData => {
            // console.log(jsonData);
            this.setState({
                selectedGoal: jsonData.data[0]
            });
        });
    };

    getTasksInGoal = goalId => {
        // console.log("loading tasks for goal " + goalId);
        API.getTasksInGoal(goalId).then(jsonData => {
            // console.log(jsonData);
            this.setState({
                tasks: jsonData.data
            });
        });
    };

    getUserDetails = (userId) => {
        // console.log('loading user details')
        API.getUserDetails(userId)
            .then( jsonData => {
                // console.log(jsonData);
                let userData = jsonData.data;
                // update state with user data
                this.setState({
                    loginMessage: "",
                    userId: userId,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    isAuthenticated: true,
                    userDetails: userData,
                    userGoals: userData.userGoals,
                });
                this.setupUserGoals(userData);
            })
    }

    setupUserGoals = (userData) => {
        // this appears to be needed becuase React sees the array nodes in the API results as Object rather than an array of Objects   
        let visualizerData = [];
        let dbUserGoals = userData.userGoals;
        for (let g = 0; g < dbUserGoals.length; g ++) {
            let userGoalId = dbUserGoals[g]._id;
            let goalId = dbUserGoals[g].goalId._id;
            let goalName = dbUserGoals[g].goalId.goalName;
            let goalPercent = dbUserGoals[g].goalPercent;
            let userTasks = [];
            let dbUserTasks = dbUserGoals[g].goalId.tasks;
            for (let t = 0; t < dbUserTasks.length; t++) {
                let userTimeline = []
                let dbUserTimeline = userData.userGoals[g].taskTimelines;
                // console.log('usertimeline:', dbUserTimeline);
                for (let l = 0; l < this.state.visualizerDates.length; l++) {
                    // is the first date in the array of timeline
                    let currentDate = this.state.visualizerDates[l];
                    let taskCompleted = false;
                    let timelineId = 'null';
                    for (let ul = 0; ul < dbUserTimeline.length; ul++) {
                        if (
                                moment.utc(dbUserTimeline[ul].taskDate).format('M/D/YYYY') === moment.utc(currentDate).format('M/D/YYYY') &&
                                dbUserTimeline[ul].taskId === dbUserTasks[t]._id
                            ) {
                            taskCompleted = dbUserTimeline[ul].taskCompletedYN;
                            timelineId = dbUserTimeline[ul]._id
                        }
                    }
                    let timelineEntry = {
                        timelineId: timelineId,
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
                    'taskCurrentStreak': 0,  // tracks towards task completion
                    'taskLongStreak': 0, // tracks toward task completeion
                    'taskTotalCompleted': 0, // tracks toward task completion
                    'taskCompleteYN': false, // is task completed (met streak or total target)
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
            visualizerData.push(thisGoal);
        }
        // console.log(visualizerData);

        this.calculateProgress(visualizerData);
    }

    calculateProgress = async (visualizerData) => {
        // loop through goals
        for (let g = 0; g < visualizerData.length; g++) {
            //goal loop
            // console.log('working on user goal' + visualizerData[g].goalName + ' ' + visualizerData[g].userGoalId);
            // determine how many tasks and number completed to track goal progress
            let numTasks = 0
            let numCompletedTasks = 0;
            let goalPercent = 0;            

            for (let t = 0; t < visualizerData[g].userTasks.length; t++) {
                // task loop within goal
                numTasks++
                // console.log('working on task' + visualizerData[g].userTasks[t].taskName + ' ' + visualizerData[g].userTasks[t].taskId);

                let userGoalId = visualizerData[g].userGoalId;
                let taskId = visualizerData[g].userTasks[t].taskId
                let taskCompleteYN = false; // for tracking if task has been completed by either long streak OR total number of completions
                let taskStreakTarget = visualizerData[g].userTasks[t].taskStreakTarget;
                let taskTotalTarget = visualizerData[g].userTasks[t].taskTotalTarget;
                // get timeline entries for task
                await API.getTaskTimeline(taskId, userGoalId)
                    .then( dbTaskTimeline => {
                        // cycle through timeline for 
                        let currentStreak = 0;
                        let longestStreak = 0;
                        let totalCompleted = 0;
                        let dbrecord = dbTaskTimeline.data;
                        if (dbrecord.length > 0) {
                            // console.log(dbrecord);
                            // set earliest date and now
                            let taskStartDate = moment(dbrecord[0].taskDate);
                            let taskEndDate = moment().startOf('day');
                            let numDays = taskEndDate.diff(taskStartDate, 'days') + 1;
                            let dateIndex = 0; // index for going through dbUserTimeline array
                            // cycle through all day to current date
                            let dateIndexMax = dbrecord.length - 1; // used to prevent increasing index past last item
                            // console.log(taskStartDate.format('M/D/YYYY'),'thru', taskEndDate.format('M/D/YYYY'))
                            for (let d = 0; d < numDays; d++) {
                                // test if the date d from start date (ddate) is the same as the current index of the timeline (idate)
                                let ddate = moment(taskStartDate).add(d,'days').format('M/D/YYYY').toString();
                                let idate = moment(dbrecord[dateIndex].taskDate).format('M/D/YYYY').toString();
                                // console.log(ddate, idate);
                                if ( 
                                    ddate === idate
                                    ) {
                                        // console.log(ddate,idate,dateIndex, dbrecord[dateIndex].taskCompletedYN)
                                        if (dbrecord[dateIndex].taskCompletedYN) {
                                            // if the task is completed on this date
                                            currentStreak++;  // increment current streak
                                            if (currentStreak > longestStreak) {longestStreak = currentStreak} // if the current is > longest, reset longest
                                            totalCompleted++; // increment total completed
                                        } else {
                                            // this should not be reached (since incompelte dates are going to be missing)... but in case something changes...
                                            currentStreak = 0; // reset the current streak
                                        }
                                        // increase the dateIndex
                                        if (dateIndex < dateIndexMax) {dateIndex ++};
                                    } else {
                                        currentStreak = 0;
                                    }
                            }
                        }
                        // console.log(taskId, currentStreak, longestStreak, totalCompleted);
                        // did the task get completed?
                        if (longestStreak >= taskStreakTarget || totalCompleted >= taskTotalTarget) {
                            // mark task as complete
                            taskCompleteYN = true;
                            // increase number of completed tasks for the goal
                            numCompletedTasks++
                        }
                        // set the task progress
                        // console.log(visualizerData[g].userTasks[t])
                        visualizerData[g].userTasks[t].taskCurrentStreak = currentStreak;  // tracks towards task completion
                        visualizerData[g].userTasks[t].taskLongStreak = longestStreak; // tracks toward task completeion
                        visualizerData[g].userTasks[t].taskTotalCompleted = totalCompleted;// tracks toward task completion    
                        visualizerData[g].userTasks[t].taskCompleteYN = taskCompleteYN;
                    })
            }
            // calculate the goal progress
            if (numTasks === 0) {
                goalPercent = 100;
            } else {
                goalPercent = Math.floor(100 * numCompletedTasks/numTasks);
            }
            // add the goal Percent
            // console.log(visualizerData[g].goalName, numCompletedTasks, numTasks, goalPercent);
            visualizerData[g].goalPercent = goalPercent;
            // update database with goalpercent
            await API.updateGoalPercent(visualizerData[g].userGoalId, goalPercent)
                .then( dbUserGoal => {
                    // console.log(dbUserGoal)
                    let returnData = dbUserGoal.data;
                })
                .catch( dbError => console.log(dbError) )
        }
        this.setState({
            visualizerData: visualizerData
        });

        // console.log(visualizerData);
    }

    logoutClick = () => {
        // console.log('logging out...');
        localStorage.setItem('userKey', '');
        this.resetState();
    }

    loginClose = () => {
        this.setState({
            showLogin: false
        });
    }

    loginClick = () => {
        // console.log("logging in...");
        this.setState({
          showLogin: true
        });
    };

    markUserGoalComplete = () => {
        // console.log('user completed their goal');
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
        // console.log('clicked a goal card ' + goalId);
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
                                // userGoals={this.state.userGoals}
                                userGoals={this.state.visualizerData}
                                getUserDetails={this.getUserDetails}
                                selectGoal={this.selectGoal}    
                                showTaskOverlay={this.state.showTaskOverlay}   
                                selectedGoal={this.state.selectedGoal}
                                tasks={this.state.tasks}
                            />}
                        />

                        <Route exact path='/progress' render={ (props) => <Progress {...props} 
                                visualizerDates={this.state.visualizerDates}
                                visualizerData={this.state.visualizerData}
                                changeVisualizerDates={this.changeVisualizerDates}
                                handleCompleteTask={this.handleCompleteTask}
                                handleIncompleteTask={this.handleIncompleteTask}
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