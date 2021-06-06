import React, { Component } from 'react';
import UserService from '../services/UserService';

class UserRegistrationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '', 
            password:''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler= this.changePasswordHandler.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value}) 
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value}) 
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value}) 
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value})
    }

    registerUser = (e) => {
        e.preventDefault()

        let user = {firstName: this.state.firstName ,lastName: this.state.lastName ,emailId: this.state.emailId, password: this.state.password}
        console.log('user => ' + JSON.stringify(user))

        UserService.registerUser(user).then(res => {
            this.props.history.push('/');
        })
    }

    cancel(){
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            
                            <h3 className="text-center">User Registration</h3>
                                <div className="card-body">
                                    <form>
                                        <div className = "form-group">

                                            <label> Email Id: </label>
                                            <input placeholder="Email Id" name = "emailId" type="email" className="form-control" required
                                            value = {this.state.emailId} onChange= {this.changeEmailIdHandler}/> 

                                            <label> Password: </label>
                                            <input placeholder="Password" name = "password" type="password" className="form-control"
                                            required minlength="6" maxlength="10"
                                            value = {this.state.password} onChange= {this.changePasswordHandler}/> 

                                            <label> First Name: </label>
                                            <input placeholder="First Name" name = "firstName" className="form-control"
                                            required minlength="2" maxlength="20"
                                            value = {this.state.firstName} onChange= {this.changeFirstNameHandler}/>

                                             <label> Last Name: </label>
                                            <input placeholder="Last Name" name = "lastName" className="form-control"
                                            required minlength="2" maxlength="20"
                                            value = {this.state.lastName} onChange= {this.changeLastNameHandler}/>

                                        </div>

                                        <button className = "btn btn-success" onClick = {this.registerUser}>Register</button>
                                        <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserRegistrationComponent;