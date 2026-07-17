package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Employee;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final List<Employee> employees = new ArrayList<>();

    public EmployeeController() {
        employees.add(new Employee(1, "Vinay", 50000));
        employees.add(new Employee(2, "Ganesh", 45000));
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employees;
    }

    @PostMapping
    public Employee addEmployee(@Valid @RequestBody Employee employee) {
        employees.add(employee);
        return employee;
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(
            @PathVariable int id,
            @Valid @RequestBody Employee updatedEmployee) {

        for (Employee employee : employees) {
            if (employee.getId() == id) {
                employee.setName(updatedEmployee.getName());
                employee.setSalary(updatedEmployee.getSalary());
                return employee;
            }
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable int id) {

        boolean removed =
                employees.removeIf(employee -> employee.getId() == id);

        if (removed) {
            return "Employee deleted successfully";
        }

        return "Employee not found";
    }
}