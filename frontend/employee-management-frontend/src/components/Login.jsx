import { useState } from "react";
import { login } from "../services/authService";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await login(username, password);

      setErrorMessage("");

      onLogin();
    } catch {
      setErrorMessage("Invalid username or password");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Employee Management System</h2>

        <p className="login-subtitle">Login to continue</p>

        <form onSubmit={handleLogin}>
          <label>Username</label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="login-input"
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="login-input"
          />

          {errorMessage && <p className="login-error">{errorMessage}</p>}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
