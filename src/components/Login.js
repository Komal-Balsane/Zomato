// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log("📤 Sending Login Request to Backend...");
      const res = await axios.post("http://localhost:5000/user/login", { email, password });

      console.log("✅ Server Response:", res.data);

      // Store authentication token (optional)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loggedInUser", JSON.stringify(res.data.user));

      setIsLoggedIn(true);
      navigate("/"); // Redirect to homepage
    } catch (err) {
      console.error("❌ Login Error:", err.response?.data);
      setError(err.response?.data?.message || "Invalid email or password.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={styles.input} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={styles.input} />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

// Inline CSS Styles
const styles = {
  container: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('banner3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  formBox: {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  link: {
    color: "blue",
    cursor: "pointer",
    textDecoration: "underline",
  },
};
