import mongoose from "mongoose";
import Expense from "../models/Expense.js";

export const AddExpenses = async (req, res) => {
  try {
    // 1. Removed userId from here because the Token handles it now!
    const { title, amount, category, date } = req.body;

    // 2. Use 'new Expense' (with a space) to create the instance
    const newExpense = new Expense({
      user: req.user.id, // This comes from your 'protect' middleware
      title,
      amount,
      category,
      date,
    });

    await newExpense.save();
    
    res.status(201).json({ 
      message: "Expense Added Successfully", 
      expense: newExpense 
    });
  } catch (error) {
    res.status(500).json({
      message: "uhaaa... Issue with the server",
      error: error.message,
    });
  }
};
