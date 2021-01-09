import React, { Component } from 'react'
import fire from '../config/fire'

class Home extends Component {

    constructor(props) {
        super(props);

        if (localStorage.getItem('user') == null) this.props.history.push('/sign-in');


    }
    logOut = () => {
        fire.auth().signOut();
        localStorage.removeItem('user');
        this.props.history.push('/sign-in');
    }
    render() {
        return (
            <div>
                You have logged In !
                <button onClick={this.logOut}>Log Out</button>
            </div>
        );
    }
}

export default Home;