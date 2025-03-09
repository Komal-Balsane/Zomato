// src/App.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import RestaurantList from "./components/RestaurantList";
import MenuCarousel from "./components/MenuCarousel";
import Cart from "./components/Cart";
import Reviews from "./components/Reviews";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import "./styles.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setIsLoggedIn(true);
    }

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((cartItem) => cartItem !== item);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />

      <Routes>
        {/* Home Page (Zomato Clone UI) */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                <header className="hero text-center mt-4">
                  <h1>Discover the best food & drinks</h1>
                </header>
                <RestaurantList addToCart={addToCart} />
                <MenuCarousel addToCart={addToCart} />
                <Reviews />
                <Cart cart={cart} removeFromCart={removeFromCart} />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard Route */}
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard handleLogout={handleLogout} /> : <Navigate to="/login" />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Show Footer only if logged in */}
      {isLoggedIn && (
        <footer className="bg-dark text-light text-center p-3 mt-5">
          <p>&copy; 2025 Foodie Adda. All Rights Reserved.</p>
        </footer>
      )}
    </Router>
  );
}
