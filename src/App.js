import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import Hikes from './screens/Hikes';

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ height: '100%' }}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Hikes" component={Hikes} />
            {/* <Route exact path="/saved" component={Saved} />
            {/* <Route exact path="/books/:id" component={Detail} /> */}
            {/* <Route component={NotFound} /> */} */}
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
