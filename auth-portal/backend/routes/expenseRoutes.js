import express from "express";
const router = express.Router();
import Expense from "../models/Expense.js";
import { AddExpenses } from "../Controllers/AddExpenses.js";
import { getTotalExpenses } from "../Controllers/totalExpenseController.js";
import { GetExpenses } from "../Controllers/GetExpenses.js";

// Notice we use "router" here
// Inside your routes file (e.g., expenseRoutes.js)


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
router.post("/addexpense",AddExpenses)
router.get("/getexpense",GetExpenses)
router.get("/total/:userId", getTotalExpenses);



export default router;
