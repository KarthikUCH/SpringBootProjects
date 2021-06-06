import React, { Component } from 'react';
import UserService from '../services/UserService';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '', 
            password:''
        }

        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler= this.changePasswordHandler.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value}) 
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value})
    }

    loginUser = (e) => {
        e.preventDefault()

        let user = {emailId: this.state.emailId, password: this.state.password}
        console.log('user => ' + JSON.stringify(user))

        UserService.loginUser(user)
        .then(res => {
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

                                        </div>

                                        <button className = "btn btn-success" onClick = {this.loginUser}>Login</button>
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

export default LoginComponent;