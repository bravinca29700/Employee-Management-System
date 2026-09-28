const API_URL = "http://localhost:8080/api/auth/login";

export async function login(username, password) {

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if (!response.ok) {
        throw new Error("Invalid username or password");
    }

    const data = await response.json();

    localStorage.setItem("token", data.token);

    return data;
}