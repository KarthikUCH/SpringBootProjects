package com.raju.employees.controller;

import com.raju.employees.database.model.Employee;
import com.raju.employees.database.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("employees")
    public List<Employee> getAll(){
        return employeeRepository.findAll();
    }

    @PostMapping("employees")
    public Employee saveEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

}
