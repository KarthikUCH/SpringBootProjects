import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        
        this.setState = {

        }

        this.logoutUser = this.logoutUser.bind(this)
    }

    logoutUser() {
        UserService.logoutUser()
    }

    render() {
        return (
            <div>
                <div class="container text-center">
                    <h1>Welcome to Employee Management Service</h1>
                    <h3></h3>
                    <h3><Link to = '/employees'>List of Users</Link></h3>
                    <h3><Link to = '/registeruser'>Register</Link></h3>
                    <h3><Link to = '/signin'>Login</Link></h3>
                    <button onClick = {this.logoutUser}>LogOut</button>
                </div>
            </div>
        );
    }
}

export default MainComponent;