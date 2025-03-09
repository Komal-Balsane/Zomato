// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({ cartCount }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedInUser");

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo with Link to Home */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="F1.png" alt="Foodies Logo" height="50" className="me-2" />
          <span className="fw-bold">FOODIES </span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart <FaShoppingCart /> {cartCount}
              </Link>
            </li>

            {/* Show Login & Signup if NOT logged in */}
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-primary mx-2" onClick={() => navigate("/login")}>Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-success" onClick={() => navigate("/signup")}>Signup</button>
                </li>
              </>
            ) : (
              // Show Logout if logged in
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
