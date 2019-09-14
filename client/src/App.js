import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import components that appear on every page
// import top level pages that get displayed from routes
import HelloWorld from './pages/HelloWorld';
import Error404 from './pages/Error404';
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={HelloWorld} />
          {/* <Route exact path="/books" component={Books} /> */}
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
