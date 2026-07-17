package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Department;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DepartmentController {

    @GetMapping("/departments")
    public List<Department> getAllDepartments() {

        List<Department> departments = new ArrayList<>();

        departments.add(new Department(1, "Information Technology"));
        departments.add(new Department(2, "Human Resources"));

        return departments;
    }
}