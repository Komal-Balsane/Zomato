// src/components/Reviews.js
import React, { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Customer Reviews</h2>
      <div className="card p-4 shadow-lg mx-auto" style={{ maxWidth: "1500px" }}>
        {reviews.length === 0 ? (
          <p className="text-center">No reviews yet. Submit one on the Contact page!</p>
        ) : (
          <div className="list-group">
            {reviews.map((review, index) => (
              <div key={index} className="list-group-item">
                <h5>{review.name}</h5>
                <p>{review.feedback}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
