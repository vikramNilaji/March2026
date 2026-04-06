import mongoose from 'mongoose';
import Expense from '../models/Expense.js';

export const getTotalExpenses = async (req, res) => {
  try {
    const userId = req.user.id; // From the Token

    const result = await Expense.aggregate([
      { 
        // Match only this user's expenses
        $match: { user: new mongoose.Types.ObjectId(userId) } 
      },
      { 
        // Sum the 'amount' field
        $group: { 
          _id: null, 
          totalAmount: { $sum: "$amount" },
          count: { $sum: 1 } 
        } 
      }
    ]);

    // If no expenses found, result will be an empty array []
    if (result.length > 0) {
      res.status(200).json({
        totalAmount: result[0].totalAmount,
        count: result[0].count
      });
    } else {
      res.status(200).json({ totalAmount: 0, count: 0 });
    }
  } catch (error) {
    res.status(500).json({ message: "Total calculation failed", error: error.message });
  }
};