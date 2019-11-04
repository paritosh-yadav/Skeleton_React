// src/App.js

import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./screens/NavBar";
import Profile from "./screens/Profile";
import PrivateRoute from "./screens/PrivateRoute";
import Settings from "./screens/settings/Settings.Container";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* New - use BrowserRouter to provide access to /profile */}
        <BrowserRouter>
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <NavBar />
          </header>
          <Switch>
            <Route path="/" exact />
            <Route path="/settings" exact component={Settings} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
