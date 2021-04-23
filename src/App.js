import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";

function App() {
  const logOut = localStorage.removeItem("token");
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logOut} data-testid="logoutButton" href="/">
            logout
          </a>
        </header>
        <Switch>
          <PrivateRoute exact path="/bubblepage">
            <BubblePage />
          </PrivateRoute>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
