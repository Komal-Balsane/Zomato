// src/components/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
