import Expense from "../models/Expense.js";

export const DeleteExpense = async (req, res) => {
  try {
    const { id } = req.params; // The Expense ID from the URL
    const userId = req.user.id; // The User ID from your 'protect' middleware

    // 1. We find it ONLY if the ID matches AND the owner matches
    const deletedExpense = await Expense.findOneAndDelete({ 
      _id: id, 
      user: userId 
    });

    // 2. If it doesn't exist OR it's owned by someone else, this will be null
    if (!deletedExpense) {
      return res.status(404).json({ 
        message: "Expense not found or you are not authorized to delete it!" 
      });
    }

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ 
      message: "uhaaa... delete failed", 
      error: error.message 
    });
  }
};



