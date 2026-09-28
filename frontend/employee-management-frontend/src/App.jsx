import { useEffect, useState } from "react";
import Employee from "./components/Employee";
import EmployeeForm from "./components/EmployeeForm";
import { getEmployees } from "./services/employeeService";
import { getDepartments } from "./services/departmentService";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);

  async function loadEmployees() {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchEmployees();
  }, [isLoggedIn]);

  useEffect(() => {
    getDepartments()
      .then((data) => {
        setDepartments(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }
  return (
    <div className="app-container">
      <div className="top-bar">
        <h1>Employee Management System</h1>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <EmployeeForm onEmployeeCreated={loadEmployees} />

      <Employee
        employees={employees}
        departments={departments}
        onEmployeeUpdated={loadEmployees}
      />
    </div>
  );
}

export default App;
