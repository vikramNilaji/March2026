// import Expense from '../models/Expense.js';

// export const UpdateExpense = async (req, res) => { // Removed the extra () =>
//     try {
//        const { id } = req.params;
//        const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, { new: true });
//        if (!updatedExpense) return res.status(404).json({ message: "Not found!" });
//        res.status(200).json({ message: "Updated!", expense: updatedExpense });
//      } catch (error) {
//        res.status(500).json({ message: "update failed", error: error.message });
//      }
// };

import Expense from "../models/Expense.js";

export const UpdateExpense = async (req, res) => {
  try {
    const { id } = req.params; // The ID of the specific expense
    const userId = req.user.id; // The logged-in user

    // Find the expense and ensure it belongs to the logged-in user
    const updatedExpense = await Expense.findOneAndUpdate(
      { _id: id, user: userId }, // 1. The Filter
      { $set: req.body }, // 2. The Update (Using $set is a standard practice)
      { new: true }, // 3. The Options
    );

    if (!updatedExpense) {
      return res
        .status(404)
        .json({ message: "Expense not found or unauthorized" });
    }

    res.status(200).json({ message: "Updated!", updatedExpense });
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};
