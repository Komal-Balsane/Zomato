// src/components/MenuCarousel.js
import React from "react";

const menuItems = [
  { id: 1, name: "Pav-bhaji", image: "pav-bhaji.jpg" },
  { id: 2, name: "Butter Chicken", image: "S2.jpg" },
  { id: 3, name: "Pizza", image: "S4.jpg" },
  { id: 4, name: "Pasta", image: "S5.jpg" },
  { id: 5, name: "Cheesecake", image: "S6.jpeg" },
  { id: 6, name: "Biryani", image: "biryani.jpg" },
  { id: 7, name: "matar Paneer", image: "mp.jpg" },
  { id: 8, name: "Chhole-Bhature", image: "CB.jpg" },
 
];

export default function MenuCarousel({ addToCart }) {
  // Split menu items into chunks of 4 items per slide
  const chunkSize = 4;
  const menuChunks = [];
  for (let i = 0; i < menuItems.length; i += chunkSize) {
    menuChunks.push(menuItems.slice(i, i + chunkSize));
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Menu Card</h2>
      <div id="menuCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {menuChunks.map((chunk, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="d-flex justify-content-center">
                {chunk.map((item) => (
                  <div key={item.id} className="card mx-2" style={{ width: "18rem" }}>
                    <img src={item.image} className="card-img-top" alt={item.name} />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.name}</h5>
                      <button className="btn btn-danger w-100" onClick={() => addToCart(item.name)}>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#menuCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#menuCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
}
