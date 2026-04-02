import mongoose from "mongoose";
import Expense from "../models/Expense.js";

export const AddExpenses = async (req, res) => {
  try {
    const { userId, title, amount, category, date } = req.body;
    const newExpense = await Expense({
      user: new mongoose.Types.ObjectId(userId),
      title,
      amount,
      category,
      date,
    });

    await newExpense.save();
    res
      .status(201)
      .json({ message: "Expense Added Successfully ", expense: newExpense });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "uhaaa... Issue with the server",
        error: error.message,
      });
  }
};
