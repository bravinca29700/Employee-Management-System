package com.ajubravin.employeemanagementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ajubravin.employeemanagementsystem.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}