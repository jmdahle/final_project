import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import components that appear on every page
import Navbar from './components/Navbar';
// import top level pages that get displayed from routes
import HelloWorld from './pages/HelloWorld';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Manage from './pages/Manage';
import AddGoal from './pages/AddGoal';
import Progress from './pages/Progress';
import Test from './pages/Test';
import Button from './components/Button';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Button />
        <Switch>
          <Route exact path='/' component={HelloWorld} />
          <Route exact path='/home' componenrt={Home} />
          <Route exact path='/manage' component={Manage} />
          <Route exact path='/addgoal' component={AddGoal} />
          <Route exact path='/progress' component={Progress} />
          <Route exact path='/test' component={Test} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
