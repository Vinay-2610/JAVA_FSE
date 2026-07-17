package com.cognizant.employee_management_system.controller;

import com.cognizant.employee_management_system.entity.Employee;
import com.cognizant.employee_management_system.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.cognizant.employee_management_system.projection.EmployeeProjection;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(
            @PathVariable Long id,
            @RequestBody Employee employee) {

        employee.setId(id);
        return employeeRepository.save(employee);
    }

    @DeleteMapping("/{id}")
public void deleteEmployee(@PathVariable Long id) {
    employeeRepository.deleteById(id);
}

@GetMapping("/page")
public Page<Employee> getEmployeesWithPagination(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "5") int size,
        @RequestParam(defaultValue = "name") String sortBy) {

    Pageable pageable = PageRequest.of(
            page,
            size,
            Sort.by(sortBy).ascending()
    );

    return employeeRepository.findAll(pageable);
}
@GetMapping("/projection")
public List<EmployeeProjection> getEmployeeProjections() {
    return employeeRepository.findAllProjectedBy();
}

}