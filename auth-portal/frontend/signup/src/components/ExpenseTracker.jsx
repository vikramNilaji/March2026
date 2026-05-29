import React, { useState } from "react";
import { Clock, WalletCards } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const navigate = useNavigate();

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <section className="et-container">
      <header className="et-header">
        <span className="section-kicker">
          <WalletCards size={18} />
          Expense Tracker
        </span>
        <h1>Track spending without leaving VaultHub.</h1>
        <p>
          Add daily expenses, review recent history, and keep the dashboard
          clean enough for repeated use.
        </p>
      </header>

      <div className="et-main-layout">
        <ExpenseForm onExpenseAdded={handleRefresh} />
        <ExpenseList key={refreshKey} />
      </div>

      <button className="history-btn et-history-btn" onClick={() => navigate("/expense-list")}>
        <Clock size={17} />
        View Full History
      </button>
    </section>
  );
};

export default ExpenseTracker;
