const API_URL = "http://localhost:8080/api/employees";

export async function getEmployees() {

    const token = localStorage.getItem("token");

    const response = await fetch(API_URL, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    return response.json();
}

export async function createEmployee(employee) {

    const token = localStorage.getItem("token");

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(employee)
    });

    if (!response.ok) {
        throw new Error("Failed to create employee");
    }

    return response.json();
}

export async function updateEmployee(id, employee) {

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(employee)
    });

    if (!response.ok) {
        throw new Error("Failed to update employee");
    }

    return response.json();
}

export async function deleteEmployee(id) {

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to delete employee");
    }

    return response.text();
}