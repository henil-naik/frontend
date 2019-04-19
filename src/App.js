import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Profile from "./components/profile";
import logo from "./logo.svg";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                        </a>
                        <Link to="/" className="navbar-brand">Simform Test Application</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/signin" className="nav-link">Already Member? SignIn</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/signup" className="nav-link">New User? SignUp</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/profile" className="nav-link">View Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br />
                    <Route path="/" exact component={Signup} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/profile" component={Profile} />

                </div>
            </Router>
        );
    }
}
export default App;