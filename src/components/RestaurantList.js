// src/components/RestaurantList.js
import React from "react";

const restaurants = [
  { id: 1, name: "The Italian Bistro", cuisine: "Italian", image: "R1.jpg" },
  { id: 2, name: "Spice of India", cuisine: "Indian", image: "R2.jpg" },
  { id: 3, name: "Sushi Delight", cuisine: "Japanese", image: "R3.jpg" },
  { id: 4, name: "Taste of India", cuisine: "Indian", image: "R4.jpg" },
  { id: 5, name: "Flavour Cafe", cuisine: "Indian", image: "R5.jpg" },
  { id: 6, name: "Sasarwadi", cuisine: "Indian", image: "R6.jpeg" },
];

export default function RestaurantList({ addToCart }) {
  return (
    <div className="row mt-4">
      {restaurants.map((res) => (
        <div key={res.id} className="col-md-4">
          <div className="card">
            <img src={res.image} className="card-img-top" alt={res.name} />
            <div className="card-body">
              <h5 className="card-title">{res.name}</h5>
              <button className="btn btn-danger w-100" onClick={() => addToCart(res.name)}>Order Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
