import mongoose from "mongoose";
import express from "express";
const router = express.Router();
import Expense from "../models/Expense.js";

export const GetExpenses = async(req,res) => {
    try {
      // 1. Extract the userId from the URL parameter (:userId)
      const { userId } = req.params;
  
      // 2. Query the database for all expenses belonging to this specific user
      // We use .find() because a user will likely have multiple expense records
      const expenses = await Expense.find({ user: userId }).sort({ date: -1 });
  
      // 3. If successful, send the array of expenses back to the frontend/Postman
      res.status(200).json(expenses);
    } catch (error) {
      // If a database error occurs, send a 500 status and the error message
      res.status(500).json({
        message: "uhaaa... Could not fetch expenses",
        error: error.message,
      });
    }
  };

