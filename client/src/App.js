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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    categoryName: "",
    categoryTagLine: "",
    categoryImgSrc: "",
    categories: [
      {
        id: 1,
        categoryName: "Fitness",
        categoryImgSrc: "https://i.chzbgr.com/full/4029669888/hF36A37F6/",
        categoryTagline: "see what happens when you leave your computer",
        ButtonLink: "#"
      },
      {
        id: 2,
        categoryName: "Healthy eating",
        categoryImgSrc:
          "https://i.pinimg.com/originals/c6/c4/33/c6c433db5099fdfead1677633de561b1.jpg",
        categoryTagline:
          "becasue taco tuesdays and thirsty thursdays after 30 looks like this",
        ButtonLink: "#"
      },
      {
        id: 3,
        categoryName: "Increase productivity at work",
        categoryImgSrc:
          "https://i0.wp.com/www.billymoyerboss.com/wp-content/uploads/2015/09/Slacker-blog.jpg?fit=760%2C507",
        categoryTagline:
          "try not to get fired...at least before you can apply for unemployment",
        ButtonLink: "#"
      },
      {
        id: 4,
        categoryName: "Increase willpower",
        categoryImgSrc:
          "https://www.adywatts.com/wp-content/uploads/cookie-604x540.jpg",
        categoryTagline: "Try to be less of a garbage person.",
        ButtonLink: "#"
      },
      {
        id: 5,
        categoryName: "Upgrade your social life",
        categoryImgSrc:
          "https://img.buzzfeed.com/buzzfeed-static/static/2015-08/7/15/enhanced/webdr02/original-13074-1438974186-3.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*",
        categoryTagline:
          "End that sould crushing lonlyness that happenes after college.",
        ButtonLink: "#"
      },
      {
        id: 6,
        categoryName: "Learn a new skill",
        categoryImgSrc:
          "https://confettifair.files.wordpress.com/2015/08/unicorn.jpg",
        categoryTagline:
          "Because all your friends on social media seem to have it all figured out, why haveent you?",
        ButtonLink: "#"
      }
    ],
    selectedCategory: {},
    categoryId: "",
    goalName: "",
    goalId: "",
    goals: [],
    selectedGoal: {},
    taskName: "",
    tasks: [],
    weeklyTarget: "7",
    totalTarget: "7",
    isAuthenticated: false,
    showLogin: false,
    failedLoginAttempts: 0
  };

  // uncomment this when categories can be loaded from database
  // componentDidMount = () => {
  //     this.getCategories()
  // }

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

  handleGoalFormSubmit = event => {
    event.preventDefault();
    console.log("submit goal clicked");
    let goalData = {
      categoryId: this.state.categoryId,
      goalName: this.state.goalName
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

  handleTaskFormSubmit = event => {
    event.preventDefault();
    console.log("submit task clicked");
    let taskData = {
      goalId: this.state.goalId,
      taskName: this.state.taskName,
      weeklyTarget: parseInt(this.state.weeklyTarget),
      totalTarget: parseInt(this.state.totalTarget)
    };
    console.log(taskData);
    API.addTask(taskData)
      .then(jsonData => {
        console.log(jsonData);
        this.getTasksInGoal(this.state.goalId);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getCategories = () => {
    console.log("loading category options");
    API.getCategories().then(jsonData => {
      console.log(jsonData);
      this.setState({
        categories: jsonData.data
      });
    });
  };

  getCategoryMatch = categoryId => {
    console.log("loding selected category with id " + categoryId);
    API.getCategoryMatch(categoryId).then(jsonData => {
      console.log(jsonData);
      this.setState({
        selectedCategory: jsonData.data[0]
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

  getTasksInGoal = goalId => {
    console.log("loading tasks for goal " + goalId);
    API.getTasksInGoal(goalId).then(jsonData => {
      console.log(jsonData);
      this.setState({
        tasks: jsonData.data
      });
    });
  };

  setUserSession = key => {
    localStorage.setItem("userKey", key);
    this.setState({
      isAuthenticated: true,
      showLogin: false
    });
  };

  logoutClick = () => {
    console.log("logging out...");
    localStorage.setItem("userKey", "");
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isAuthenticated: false,
      showLogin: false,
      failedLoginAttempts: 0
    });
  };

  selectGoal = goalId => {
    console.log("clicked a goal card " + goalId);
    // populate selectedGoal
    this.getGoalMatch(goalId);
    // get tasks for the selectedGoal
    this.getTasksInGoal(goalId);
  };

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
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} categories={this.state.categories} />
              )}
            />
            <Route
              exact
              path="/register"
              render={props => (
                <Register
                  {...props}
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  email={this.state.email}
                  password={this.state.password}
                  handleOnChange={this.handleOnChange}
                  setUserSession={this.setUserSession}
                />
              )}
            />
            <Route
              exact
              path="/home"
              render={props => (
                <Home {...props} catagories={this.state.categories} />
              )}
            />
            <Route exact path="/manage" component={Manage} />
            <Route
              exact
              path="/addgoal"
              render={props => (
                <AddGoal
                  {...props}
                  categoryId={this.state.categoryId}
                  selectedCategory={this.state.selectedCategory}
                  handleOnChange={this.handleOnChange}
                  getCategories={this.getCategories}
                  categories={this.state.categories}
                  goals={this.state.goals}
                  selectGoal={this.selectGoal}
                />
              )}
            />
            <Route exact path="/progress" component={Progress} />
            {/* <Route exact path='/test' render={(props) => <Test {...props}
                            handleOnChange={this.handleOnChange}
                            />}
                        /> */}
            <Route
              exact
              path="/admin"
              render={props => (
                <Admin
                  {...props}
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
                />
              )}
            />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
