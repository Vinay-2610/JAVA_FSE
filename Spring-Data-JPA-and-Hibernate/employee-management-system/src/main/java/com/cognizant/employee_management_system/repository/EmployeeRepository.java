package com.cognizant.employee_management_system.repository;

import com.cognizant.employee_management_system.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.cognizant.employee_management_system.projection.EmployeeProjection;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Derived query
    List<Employee> findByName(String name);

    List<Employee> findByEmail(String email);

    List<EmployeeProjection> findAllProjectedBy();

    // Custom JPQL query
    @Query("SELECT e FROM Employee e WHERE e.name = :name")
    List<Employee> searchByName(@Param("name") String name);

    @Query(name = "Employee.findByEmailNamed")
List<Employee> findByEmailNamed(@Param("email") String email);
}