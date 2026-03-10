import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    res.json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: "Signup failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
