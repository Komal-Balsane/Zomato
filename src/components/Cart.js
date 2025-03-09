// src/components/Cart.js
import React from "react";

export default function Cart({ cart, removeFromCart }) {
  return (
    <div className="container mt-5" id="cart-section">
      <h2>Your Cart</h2>
      <ul className="list-group">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
