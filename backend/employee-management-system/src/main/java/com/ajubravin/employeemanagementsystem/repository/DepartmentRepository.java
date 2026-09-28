package com.ajubravin.employeemanagementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ajubravin.employeemanagementsystem.entity.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}