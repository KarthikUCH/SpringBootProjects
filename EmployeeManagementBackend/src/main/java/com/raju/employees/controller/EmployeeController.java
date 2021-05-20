package com.raju.employees.controller;

import com.raju.employees.database.model.Employee;
import com.raju.employees.database.repository.EmployeeRepository;
import com.raju.employees.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // get all employees api
    @GetMapping("employees")
    public List<Employee> getAll(){
        return employeeRepository.findAll();
    }

    // create new employee api
    @PostMapping("employees")
    public Employee saveEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    // get employee by id api
    @GetMapping("employees/{id}")
    public ResponseEntity<Employee>  getEmployee(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id "+id));
        return ResponseEntity.ok(employee);
    }

}
