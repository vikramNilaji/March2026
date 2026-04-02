import mongoose from 'mongoose';
import Expense from '../models/Expense.js';

export const getTotalExpenses = async (req, res) => {
  try {
    const { userId } = req.params;

    const total = await Expense.aggregate([
      { 
        $match: { 
          // Convert the URL string to a real MongoDB ObjectId
          user: new mongoose.Types.ObjectId(userId) 
        } 
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" }, // Adds up all "amount" fields
          count: { $sum: 1 }                // Counts total number of items
        }
      }
    ]);

    const result = total.length > 0 ? total[0] : { totalAmount: 0, count: 0 };
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ message: "uhaaa... sum failed", error: error.message });
  }
};