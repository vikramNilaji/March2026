import Expense from '../models/Expense.js';

export const UpdateExpense = async (req, res) => { // Removed the extra () =>
    try {
       const { id } = req.params;
       const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, { new: true });
       if (!updatedExpense) return res.status(404).json({ message: "Not found!" });
       res.status(200).json({ message: "Updated!", expense: updatedExpense });
     } catch (error) {
       res.status(500).json({ message: "update failed", error: error.message });
     }
};