import { useState } from "react";
import { updateEmployee, deleteEmployee } from "../services/employeeService";

function Employee({ employees, departments, onEmployeeUpdated }) {
  const [editingEmployee, setEditingEmployee] = useState(null);

  if (editingEmployee) {
    return (
      <div className="employee-form">
        <h2>Edit Employee</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Name</label>

            <input
              className="form-input"
              type="text"
              value={editingEmployee.name}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              className="form-input"
              type="email"
              value={editingEmployee.email}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Department</label>

            <select
              className="form-input"
              value={editingEmployee.department.id}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  department: {
                    ...editingEmployee.department,
                    id: Number(e.target.value),
                  },
                })
              }
            >
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
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
              value={editingEmployee.salary}
              onChange={(e) =>
                setEditingEmployee({
                  ...editingEmployee,
                  salary: Number(e.target.value),
                })
              }
            />
          </div>
        </div>

        <button
          className="update-button"
          onClick={async () => {
            try {
              await updateEmployee(editingEmployee.id, {
                name: editingEmployee.name,
                email: editingEmployee.email,
                departmentId: editingEmployee.department.id,
                salary: editingEmployee.salary,
              });

              setEditingEmployee(null);

              await onEmployeeUpdated();
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Update
        </button>

        <button
          className="cancel-button"
          onClick={() => setEditingEmployee(null)}
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Employees</h2>
      <div className="table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.department.name}</td>
                <td>₹{employee.salary.toLocaleString("en-IN")}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-button"
                      onClick={() => setEditingEmployee(employee)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-button"
                      onClick={async () => {
                        const confirmed = window.confirm(
                          "Are you sure you want to delete this employee?",
                        );

                        if (!confirmed) {
                          return;
                        }

                        try {
                          await deleteEmployee(employee.id);
                          await onEmployeeUpdated();
                        } catch (error) {
                          console.error(error);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
