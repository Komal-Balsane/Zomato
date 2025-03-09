// src/components/Contact.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !feedback) {
      alert("Please fill out all fields");
      return;
    }

    const newReview = { name, feedback };
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    storedReviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(storedReviews));

    alert("Review submitted successfully!");
    setName("");
    setFeedback("");

    // Redirect to Home Page
    navigate("/");
  };


  
  return (
    <div className="mb-3">
      <h2 className="text-center">Submit Your Review</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-lg mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Review</label>
          <textarea className="form-control" rows="3" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-danger w-100">Submit Review</button>
      </form>

      {/* Contact Info Box */}
      <div className="card p-3 mt-4 shadow-lg mx-auto" style={{ maxWidth: "500px", backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
        <h4 className="text-center">Contact Information</h4>
        <p><strong>Email:</strong> Foodie@zomatoclone.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Address:</strong> 123 Food Street, Sangamner, India</p>
      </div>
    </div>
  );
}
