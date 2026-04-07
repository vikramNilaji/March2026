import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from "react-router-dom";

const ExpenseTracker = () => {
  const navigate = useNavigate();
  return (
    <div className="expense-tracker-page" style={{ padding: "20px" }}>
      <h2>💰 My Expense Tracker</h2>
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        <ExpenseForm />
        <div className="list-section">
          {/* This is where your Total and List will go */}
          <button>History</button>
          
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
