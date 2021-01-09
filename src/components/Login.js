import React, { Component } from 'react'
import fire from '../config/fire'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Login extends Component {

    state = {
        email: " ",
        password: " ",
        incorrect: false
    }

    constructor(props) {
        super(props);
        if (localStorage.getItem('user') !== null) this.props.history.push('/home');

    }
    login = (e) => {

        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u);
            localStorage.setItem('user', JSON.stringify(u.user));
            this.props.history.push('/home');
            this.setState({ incorrect: false });

        }).catch((err) => {
            console.log(err);
            console.log("Incorrect username or password");
            this.setState({ incorrect: true });
        })
    }
    handleChange = (e) => {
        console.log("Email", this.state.email);
        console.log("Password", this.state.password);
        this.setState({
            [e.target.value.name]: e.target.value.password
        })
    }
    render() {
        return (
            <div className="form">
                <form>
                    {/*  */}

                    <div>

                        <h3>Log in</h3>
                        {this.state.incorrect ? <p>Incorrect Email or Passord</p> : null}
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email"
                                id="email"
                                className="form-control"
                                onInput={e => this.setState({ email: e.target.value })}
                                placeholder="Enter email"
                                onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input

                                type="password"
                                id="password"
                                className="form-control"
                                onInput={e => this.setState({ password: e.target.value })}
                                placeholder="Enter password"
                                onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.login}>Sign in</button>



                        <p className="forgot-password text-right">
                            You haven't registered before ? <a href="/sign-up">Sign Up</a>
                        </p>

                        {/* <Link className="nav-link" to={"/sign-up"}>Sign Up</Link> */}



                        {/*  */}
                    </div>



                </form>
            </div>
        );
    }
}

export default Login;

