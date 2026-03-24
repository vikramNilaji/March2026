import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://march2026-theta.vercel.app", // Your specific frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

connectDB();
// Add this right before app.listen to verify the URL works in a browser
app.get("/", (req, res) => {
  res.send("Backend is live and healthy!");
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10); //Generate random salt
    const hashPassword = await bcrypt.hash(password, salt); //Hash password
    const user = new User({
      name,
      email,
      password: hashPassword,
    });
    console.log("original password",password)
    console.log("Hashed Password",hashPassword)

    await user.save();

    res.json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: "Signup failed" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid Email or Password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Email or Password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "your_secret_key",
      { expiresIn: "1h" },
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error during signin" });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
