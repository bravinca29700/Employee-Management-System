package com.ajubravin.employeemanagementsystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ajubravin.employeemanagementsystem.entity.Department;
import com.ajubravin.employeemanagementsystem.repository.DepartmentRepository;

@Service
public class DepartmentService {

    private final DepartmentRepository departmentRepository;

    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    public Department createDepartment(Department department) {
        return departmentRepository.save(department);
    }
}