const API_URL = "http://localhost:8080/api/departments";

export async function getDepartments() {

    const token = localStorage.getItem("token");

    const response = await fetch(API_URL, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch departments");
    }

    return response.json();
}