package com.cognizant.employee_management_system.repository;

import com.cognizant.employee_management_system.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DepartmentRepository extends JpaRepository<Department, Long> {

    List<Department> findByName(String name);
}