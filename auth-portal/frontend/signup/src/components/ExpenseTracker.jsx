import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from "react-router-dom";
import ExpenseList from "./ExpenseList";
import "./ExpenseTracker.css"

const ExpenseTracker = () => {
  const [refreshKey,setRefreshKey]=useState(0)
  const navigate = useNavigate();
  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1); // Changing this key forces the list to re-fetch
  };
  return (
    <div className="expense-tracker-page" style={{ padding: "20px" }}>
      <h2>💰 My Expense Tracker</h2>
      
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        <ExpenseForm onExpenseAdded={handleRefresh} />
        <div className="list-section">
         </div>
      <ExpenseList key={refreshKey}/> 
      <button style={{height:"40px"}} onClick={() => navigate("/expense-list")}>History</button>
    </div>
          {/* This is where your Total and List will go */}
          
        </div>
     
  );
};

export default ExpenseTracker;
