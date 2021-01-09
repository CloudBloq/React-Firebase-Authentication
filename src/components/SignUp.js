import React, { Component } from "react";
import fire from '../config/fire';
export default class SignUp extends Component {


    state = {
        email: " ",
        password: " "
    }
    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        console.log("This is the handle change method");
        console.log("Email", this.state.email);
        console.log("Password", this.state.password);
        this.setState({
            [event.target.value.name]: event.target.value.password
        })
    }
    signUp = (e) => {
        //  this is the sign up method used to register users
        console.log("This is the signup method");
        console.log("Email", this.state.email);
        console.log("Password", this.state.password);

        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u);
            this.props.history.push('/sign-in');
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                        className="form-control"
                        placeholder="Enter email"
                        id="email"
                        onInput={e => this.setState({ email: e.target.value })}
                        // value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onInput={e => this.setState({ password: e.target.value })}
                        placeholder="Enter password"
                        onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Passowrd" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.signUp}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">log in?</a>
                </p>
            </form>
        );
    }
}