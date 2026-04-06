import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import expenseRoutes from "./routes/expenseRoutes.js";
import { SignUp, SignIn } from "./Controllers/AuthControllers.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());
connectDB();
app.get("/", (req, res) => {
  res.send("Backend is live and healthy!");
});
app.post("/signup", SignUp);
app.post("/signin", SignIn);
app.use("/api/expenses", expenseRoutes);
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
