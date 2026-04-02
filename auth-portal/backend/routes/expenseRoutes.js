import express from "express";
const router = express.Router();
import { AddExpenses } from "../Controllers/AddExpenses.js";
import { getTotalExpenses } from "../Controllers/totalExpense.js";
import { GetExpenses } from "../Controllers/GetExpenses.js";
import { UpdateExpense } from "../Controllers/UpdateExpense.js"; // Make sure to import
import { DeleteExpense } from "../Controllers/DeleteExpense.js"; // Make sure to import

// URL: /api/expenses/add
router.post("/add", AddExpenses);

// URL: /api/expenses/user/:userId (Must have :userId to match your controller)
router.get("/user/:userId", GetExpenses);

// URL: /api/expenses/total/:userId
router.get("/total/:userId", getTotalExpenses);

// URL: /api/expenses/update/:id
router.put("/update/:id", UpdateExpense);

// URL: /api/expenses/delete/:id
router.delete("/delete/:id", DeleteExpense);

export default router;
