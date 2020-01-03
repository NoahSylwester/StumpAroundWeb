import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './screens/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ height: '100%' }}>
          <Switch>
            <Route exact path="/" component={Login} />
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
