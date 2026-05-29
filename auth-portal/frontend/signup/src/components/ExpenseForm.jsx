import React, { useState } from "react";
import axios from "axios";
import "./ExpenseForm.css";

const ExpenseForm = ({onExpenseAdded}) => {
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: new Date().toISOString().split("T")[0],
  });

  const { title, amount, category, date } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage({ type: "", text: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setMessage({ type: "error", text: "Please enter an expense title." });
      return;
    }
    if (!amount || Number(amount) <= 0) {
      setMessage({ type: "error", text: "Amount must be greater than zero." });
      return;
    }

    try {
      setIsSubmitting(true);
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(
        "https://vaulthub-xm1r.onrender.com/api/expenses/add",
        { ...formData, title: title.trim() },
        config,
      );

      setMessage({ type: "success", text: "Expense added successfully." });

      setFormData({
        title: "",
        amount: "",
        category: "Food",
        date: new Date().toISOString().split("T")[0],
      });
      if (onExpenseAdded) {
        onExpenseAdded(); 
      }
    } catch (err) {
      console.error(err.response?.data?.message || "Error adding expense");
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Could not add expense.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="expense-form">
      <h3>Add New Expense</h3>
      {message.text && (
        <div className={`form-message ${message.type}`}>{message.text}</div>
      )}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title (e.g. Cricket Kit)"
          value={title}
          onChange={onChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          min="1"
          step="1"
          value={amount}
          onChange={onChange}
          required
        />
        <select name="category" value={category} onChange={onChange}>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Sports">Sports</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
          
        </select>
        <input
          type="date"
          name="date"
          value={date}
          onChange={onChange}
          required
        />
        <button
          type="submit"
          className="refresh-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Expense"}
        </button>
         
      </form>
  
    </div>
  );
};

export default ExpenseForm;
