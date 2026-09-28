package com.ajubravin.employeemanagementsystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ajubravin.employeemanagementsystem.dto.EmployeeRequestDTO;
import com.ajubravin.employeemanagementsystem.entity.Department;
import com.ajubravin.employeemanagementsystem.entity.Employee;
import com.ajubravin.employeemanagementsystem.exception.DepartmentNotFoundException;
import com.ajubravin.employeemanagementsystem.exception.EmployeeNotFoundException;
import com.ajubravin.employeemanagementsystem.repository.DepartmentRepository;
import com.ajubravin.employeemanagementsystem.repository.EmployeeRepository;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;

    public EmployeeService(
            EmployeeRepository employeeRepository,
            DepartmentRepository departmentRepository) {

        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee createEmployee(EmployeeRequestDTO employeeRequestDTO) {

        Department department = departmentRepository.findById(
                employeeRequestDTO.getDepartmentId()).orElseThrow(() -> new DepartmentNotFoundException("Department not found"));

        Employee employee = new Employee();

        employee.setName(employeeRequestDTO.getName());
        employee.setEmail(employeeRequestDTO.getEmail());
        employee.setDepartment(department);
        employee.setSalary(employeeRequestDTO.getSalary());

        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long id, EmployeeRequestDTO employeeRequestDTO) {

        Employee existingEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));

        Department department = departmentRepository.findById(
                employeeRequestDTO.getDepartmentId()).orElseThrow(() -> new DepartmentNotFoundException("Department not found"));

        existingEmployee.setName(employeeRequestDTO.getName());
        existingEmployee.setEmail(employeeRequestDTO.getEmail());
        existingEmployee.setDepartment(department);
        existingEmployee.setSalary(employeeRequestDTO.getSalary());

        return employeeRepository.save(existingEmployee);
    }

    public void deleteEmployee(Long id) {

        if (!employeeRepository.existsById(id)) {
            throw new EmployeeNotFoundException("Employee not found");

        }

        employeeRepository.deleteById(id);
    }

}