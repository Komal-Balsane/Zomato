require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json()); // ✅ Required to parse JSON request body
app.use(cors());

// ✅ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  ssl: true,
  tlsAllowInvalidCertificates: true
})
.then(() => {
  console.log("✅ Connected to MongoDB Atlas");
  console.log("🗄️ Using Database:", mongoose.connection.name); // ✅ Debugging database name
})
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Import and use user routes
const userRoutes = require("./routes/user"); // ✅ Ensure this path is correct
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
