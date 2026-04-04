import mongoose from "mongoose";
import Expense from "../models/Expense.js";

export const GetExpenses = async (req, res) => {
  try {
    // 1. SECURE WAY: Get the ID from the 'protect' middleware (the Token)
    // We no longer look at req.params
    const userId = req.user.id; 

    // 2. Query the database for expenses belonging to THIS token holder
    const expenses = await Expense.find({ user: userId }).sort({ date: -1 });

    // 3. Send the data back
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: "uhaaa... Could not fetch expenses",
      error: error.message,
    });
  }
};
