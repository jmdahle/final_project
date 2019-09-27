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

class App extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        categoryName: '',
        categoryTagLine: '',
        categoryImgSrc: '',
        categories: [
            {
              "id": 1,
              "categoryName": "Fitness",
              "categoryImgSrc": "https://i.chzbgr.com/full/4029669888/hF36A37F6/",
              "categoryTagline": "See what happens when you leave your computer",
              "ButtonLink": "#"
            },
            {
                "id": 2,
                "categoryName": "Healthy Eating",
                "categoryImgSrc": "https://i.pinimg.com/originals/c6/c4/33/c6c433db5099fdfead1677633de561b1.jpg",
                "categoryTagline": "Because Taco Tuesdays and Thirsty Thursdays after 30 looks like this",
                "ButtonLink": "#"
              },
              {
                "id": 3,
                "categoryName": "Increase Productivity at Work",
                "categoryImgSrc": "https://i0.wp.com/www.billymoyerboss.com/wp-content/uploads/2015/09/Slacker-blog.jpg?fit=760%2C507",
                "categoryTagline": "Try not to get fired...At least before you can apply for unemployment",
                "ButtonLink": "#"
              },
              {
                "id": 4,
                "categoryName": "Increase Willpower",
                "categoryImgSrc": "https://www.adywatts.com/wp-content/uploads/cookie-604x540.jpg",
                "categoryTagline": "Try to be less of a garbage person.",
                "ButtonLink": "#"
              },
              {
                "id": 5,
                "categoryName": "Upgrade Your Social Life",
                "categoryImgSrc": "https://img.buzzfeed.com/buzzfeed-static/static/2015-08/7/15/enhanced/webdr02/original-13074-1438974186-3.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*",
                "categoryTagline": "End that soul-crushing loneliness that happens after college.",
                "ButtonLink": "#"
              },
              {
                "id": 6,
                "categoryName": "Learn a New Skill",
                "categoryImgSrc": "https://confettifair.files.wordpress.com/2015/08/unicorn.jpg",
                "categoryTagline": "Because all your friends on social media seem to have it all figured out, why haven't you?",
                "ButtonLink": "#"
              }
            
        ],
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
        showTaskOverlay: false
    }

    componentDidMount = () => {
        this.resetState();
        let userId = localStorage.getItem('userKey');
        if (userId) {
            console.log('user key is ' + userId );
            this.getUserDetails(userId);
        } else {
            console.log('user key is missing!  No one is logged in');
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
            showTaskOverlay: false
            });        
            this.getCategories();
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
        let goalName= this.state.selectedGoal.goalName;
        let goalTasks = [];
        for (let i = 0; i < this.state.tasks.length; i++) {
            goalTasks.push({
                taskName: this.state.tasks[i].taskName,
                streakTarget: this.state.tasks[i].streakTarget,
                totalTarget: this.state.tasks[i].totalTarget
            });
        }
        let userGoalData = {
            userId: userId,
            goals: [{
                goalName: goalName,
                goalPercent: 0,
                tasks: goalTasks
            }]
        }
        console.log(userGoalData);
        API.addUserGoal(userGoalData)
            .then(jsonData => {
                console.log(jsonData);
                // go to manage goals page
            })
            .catch(error => {
                console.log(error);
            });
        // close the TaskOverlay
        this.setState({
            showTaskOverlay: false
        });
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
        console.log("loding selected category with id " + categoryId);
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

    getUserDetails = (userId) => {
        console.log('loading user details')
        API.getUserDetails(userId)
            .then(jsonData => {
                console.log(jsonData);
                let userData = jsonData.data;
                this.setState({
                    loginMessage: "",
                    userId: userId,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    isAuthenticated: true
                });
            })
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
                        />
                    <Switch>
                        <Route exact path='/' render={
                            (props) => <Home {...props} 
                            categories={this.state.categories}
                            // selectCategory={this.selectCategory}
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
                            />}
                        />
                        <Route exact path='/home' render={
                               (props) => <Home {...props} 
                               categories={this.state.categories}
                               selectCategory={this.selectCategory}
                               />}
                         />
                        <Route exact path='/manage' component={Manage} />
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
                            />}
                        />
                        <Route exact path="/manage" render={ props =>
                            <Manage 
                                {...props}
                                handleOnChange={this.handleOnChange}
                                goals={this.state.goals}
                            />}
                        />

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
