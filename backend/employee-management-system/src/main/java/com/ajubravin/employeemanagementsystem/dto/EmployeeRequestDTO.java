package com.ajubravin.employeemanagementsystem.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class EmployeeRequestDTO {

   @NotBlank(message = "Name is required")
private String name;

@NotBlank(message = "Email is required")
@Email(message = "Enter a valid email")
private String email;

@NotNull(message = "Department is required")
private Long departmentId;

@Min(value = 10000, message = "Salary must be at least 10000")
private double salary;

    public EmployeeRequestDTO() {
    }

    public EmployeeRequestDTO(String name, String email, long departmentId, double salary) {
        this.name = name;
        this.email = email;
        this.departmentId = departmentId;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(long departmentId) {
        this.departmentId = departmentId;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}