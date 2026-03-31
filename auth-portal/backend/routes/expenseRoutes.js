import express from "express";
const router = express.Router();
import Expense from "../models/Expense.js";
import { getTotalExpenses } from "../Controllers/expenseController.js";

// Notice we use "router" here
// Inside your routes file (e.g., expenseRoutes.js)

router.get("/user/:userId", async (req, res) => {
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
});
// DELETE an expense by its unique _id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    // findByIdAndDelete looks for the specific document and removes it
    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found!" });
    }

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "uhaaa... delete failed", error: error.message });
  }
});

// UPDATE an expense by its unique _id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    // { new: true } returns the document AFTER it was updated
    const updatedExpense = await Expense.findByIdAndUpdate(
      id, 
      req.body, 
      { new: true } 
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found!" });
    }

    res.status(200).json({ 
      message: "Updated successfully!", 
      expense: updatedExpense 
    });
  } catch (error) {
    res.status(500).json({ message: "uhaaa... update failed", error: error.message });
  }
});

router.get("/total/:userId", getTotalExpenses);



export default router;
