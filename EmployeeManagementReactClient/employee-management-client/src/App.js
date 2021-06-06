import react from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch }from "react-router-dom"
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import MainComponent from './components/MainComponent';
import UserRegistrationComponent from './components/UserRegistrationComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <div>
      <Router>
            <HeaderComponent/>
              <div className="container"> 
              <Switch>
                <Route path = "/" exact component = {MainComponent}></Route>
                <Route path = "/employees" component = {ListEmployeeComponent}></Route> 
                <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route> 
                {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>  */}
                <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> 
                <Route path = "/registeruser" component = {UserRegistrationComponent}></Route> 
                <Route path = "/signin" component = {LoginComponent}></Route> 
              </Switch>
              </div>
            <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
