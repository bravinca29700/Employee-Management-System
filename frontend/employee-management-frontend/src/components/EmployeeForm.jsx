import { useEffect, useState } from "react";
import { getDepartments } from "../services/departmentService";
import { createEmployee } from "../services/employeeService";

function EmployeeForm({ onEmployeeCreated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [salary, setSalary] = useState("");
  const [departments, setDepartments] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    getDepartments()
      .then((data) => {
        setDepartments(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const employee = {
      name: name,
      email: email,
      departmentId: Number(departmentId),
      salary: Number(salary),
    };

    try {
      await createEmployee(employee);
      await onEmployeeCreated();

      setSuccessMessage("Employee added successfully");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      setName("");
      setEmail("");
      setDepartmentId("");
      setSalary("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="employee-form">

        {successMessage && (
            <p className="success-message">
                {successMessage}
            </p>
        )}

        <h2>Add Employee</h2>

        <div className="form-grid">

            <div className="form-group">
                <label>Name</label>

                <input
                    className="form-input"
                    type="text"
                    placeholder="Enter employee name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Email</label>

                <input
                    className="form-input"
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Department</label>

                <select
                    className="form-input"
                    value={departmentId}
                    onChange={(e) => setDepartmentId(e.target.value)}
                >
                    <option value="">Select Department</option>

                    {departments.map((department) => (
                        <option
                            key={department.id}
                            value={department.id}
                        >
                            {department.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Salary</label>

                <input
                    className="form-input"
                    type="number"
                    placeholder="Enter salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
            </div>

        </div>

        <button
            className="add-button"
            onClick={handleSubmit}
        >
            Add Employee
        </button>

    </div>
);
}

export default EmployeeForm;