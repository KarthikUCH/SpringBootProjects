import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            employees: []
        }

        this.addEmplooyee = this.addEmplooyee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data})
        });
    }

    addEmplooyee() {
        this.props.history.push('/add-employee/_add');
    }

    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then((res) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)})
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick = {this.addEmplooyee}> Add Employee</button>
                </div>
                <div className="row">
                    <table className= "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button className = "btn btn-info" onClick = { () => this.editEmployee(employee.id)}>Update</button>
                                            <button className = "btn btn-danger" style={{marginLeft: "10px"}} onClick = { () => this.deleteEmployee(employee.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
                
            </div>
        );
    }
}

export default ListEmployeeComponent;