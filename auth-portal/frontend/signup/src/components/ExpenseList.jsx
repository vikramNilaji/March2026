import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Check, Pencil, Trash2, X } from "lucide-react";
import "./ExpenseList.css";

const API_BASE_URL = "https://vaulthub-xm1r.onrender.com/api/expenses";

const ExpenseList = ({ refreshTrigger }) => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", amount: "" });

  const fetchExpensesAndTotal = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const [resList, resTotal] = await Promise.all([
        axios.get(`${API_BASE_URL}/user`, config),
        axios.get(`${API_BASE_URL}/total`, config),
      ]);

      setExpenses(resList.data);
      setTotal(resTotal.data.totalAmount || 0);
      setMessage({ type: "", text: "" });
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Could not load expenses.",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchExpensesAndTotal();
  }, [fetchExpensesAndTotal, refreshTrigger]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this expense?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE_URL}/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage({ type: "success", text: "Expense deleted." });
      await fetchExpensesAndTotal();
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Delete failed.",
      });
    }
  };

  const handleEditClick = (item) => {
    setEditingId(item._id);
    setEditForm({ title: item.title, amount: item.amount });
    setMessage({ type: "", text: "" });
  };

  const handleUpdate = async (id) => {
    if (!editForm.title.trim() || Number(editForm.amount) <= 0) {
      setMessage({ type: "error", text: "Enter a valid title and amount." });
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${API_BASE_URL}/update/${id}`,
        { ...editForm, title: editForm.title.trim() },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setEditingId(null);
      setMessage({ type: "success", text: "Expense updated." });
      await fetchExpensesAndTotal();
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Update failed.",
      });
    }
  };

  return (
    <div className="expense-list-container">
      <div className="list-header">
        <h3>Recent History</h3>
        <div className="total-display">Total: Rs. {total.toLocaleString("en-IN")}</div>
      </div>

      {message.text && (
        <div className={`form-message ${message.type}`}>{message.text}</div>
      )}

      {loading ? (
        <p className="empty-state">Fetching transactions...</p>
      ) : expenses.length === 0 ? (
        <p className="empty-state">No expenses found. Add your first entry.</p>
      ) : (
        <ul className="expense-ul">
          {expenses.map((item) => (
            <li key={item._id} className="expense-card">
              {editingId === item._id ? (
                <div className="edit-mode-container">
                  <input
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm({ ...editForm, title: e.target.value })
                    }
                    aria-label="Expense title"
                  />
                  <input
                    type="number"
                    min="1"
                    value={editForm.amount}
                    onChange={(e) =>
                      setEditForm({ ...editForm, amount: e.target.value })
                    }
                    aria-label="Expense amount"
                  />
                  <button className="save-btn" onClick={() => handleUpdate(item._id)}>
                    <Check size={16} />
                    Save
                  </button>
                  <button className="cancel-btn" onClick={() => setEditingId(null)}>
                    <X size={16} />
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <div className="info">
                    <strong>{item.title}</strong>
                    <small>
                      {item.category} | {new Date(item.date).toLocaleDateString()}
                    </small>
                  </div>
                  <div className="amt-actions">
                    <div className="amount-val">Rs. {Number(item.amount).toLocaleString("en-IN")}</div>
                    <button
                      className="icon-btn edit-icon"
                      onClick={() => handleEditClick(item)}
                      aria-label={`Edit ${item.title}`}
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      className="icon-btn delete-icon"
                      onClick={() => handleDelete(item._id)}
                      aria-label={`Delete ${item.title}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
