import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      console.log("📤 Sending Data to Backend:", { name, email, password });

      const res = await axios.post("http://localhost:5000/user/register", { 
        name, email, password 
      });

      console.log("✅ Server Response:", res.data);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      console.error("❌ Signup Error:", err.response?.data);
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div 
      style={{
        backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small_2x/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",  // Full screen height
        width: "100vw",   // Full screen width
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0", 
        padding: "0",
        position: "absolute",
        top: "0",
        left: "0"
      }}
    >
      <div 
        style={{ 
          background: "rgba(255, 255, 255, 0.8)", 
          padding: "20px", 
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          width: "350px",
          textAlign: "center"
        }}
      >
        <h2>Signup</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <button 
            type="submit" 
            style={{ 
              width: "100%", 
              padding: "10px", 
              backgroundColor: "red", 
              color: "white", 
              border: "none", 
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
