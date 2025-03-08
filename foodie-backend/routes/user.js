const express = require("express");
const bcrypt = require("bcryptjs");
const Customer = require("../models/Customer"); // Import the model

const router = express.Router();

// ✅ Register Route (POST)
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("📥 Received Signup Data:", req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: "Customer already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new Customer({ name, email, password: hashedPassword });

    await newCustomer.save();
    console.log("✅ Customer saved successfully:", newCustomer);
    res.status(201).json({ message: "Customer registered successfully" });
  } catch (error) {
    console.error("❌ Error in Register Route:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;
