import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// 1. Hash the password (for SignUp)
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// 2. Compare the password (for SignIn)
export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// 3. Generate the Token (for both)
export const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET || "your_secret_key",
    { expiresIn: "1h" }
  );
};