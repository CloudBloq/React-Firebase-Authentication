import React, { Component } from 'react';
import fire from './config/fire';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  authListner() {
    fire.auth().onAuthStateChanged((user => {
      if (user) {
        this.setState({ user });
      }
      else {
        this.setState({ user: null });
      }
    }))
  }
  componentDidCatch() {
    this.authListner();
  }
  render() {
    console.log("this is the render method");
    return (<Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>React Firebase Authentication</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/home" component={Home} />

            </Switch>
          </div>
        </div>
      </div></Router>
    );
  }




}


export default App;
