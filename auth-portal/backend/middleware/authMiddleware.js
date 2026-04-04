// backend/middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  // 1. Check if the "Authorization" header exists and starts with "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // 2. Get the token from the header (Bearer <token>)
      token = req.headers.authorization.split(" ")[1];

      // 3. Verify the token using your Secret Key
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_secret_key");

      // 4. Find the user by the ID stored in the token
      // We attach the user to the "req" object so the Controller can use it
      req.user = await User.findById(decoded.id).select("-password");

      // 5. Everything is good! Move to the next function (the Controller)
      next(); 
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "No token, access denied" });
  }
};