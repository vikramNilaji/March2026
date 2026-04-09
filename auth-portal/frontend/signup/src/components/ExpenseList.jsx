// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./ExpenseList.css"

// const ExpenseList = () => {
//     const [expenses, setExpenses] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchExpenses = async () => {
//             try {
//                 // 1. Get the token from localStorage
//                 const token = localStorage.getItem('token');

//                 // 2. Setup Axios Config with the Token (Bearer)
//                 const config = {
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     }
//                 };

//                 // 3. Hit the backend route you wrote
//                 const res = await axios.get('http://localhost:5000/api/expenses/user', config);

//                 // 4. Update state with the database results
//                 setExpenses(res.data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching expenses:", err.response?.data?.message || err.message);
//                 setLoading(false);
//             }
//         };

//         fetchExpenses();
//     }, []);

//     if (loading) return <p>Fetching your transactions...</p>;

//     return (
//         <div className="expense-list-container">
//             <h3>Recent History</h3>
//             {expenses.length === 0 ? (
//                 <p>No expenses found. Start adding some!</p>
//             ) : (
//                 <ul style={{ listStyle: 'none', padding: 0 }}>
//                     {expenses.map((item) => (
//                         <li key={item._id} className="expense-card">
//                             <div className="info">
//                                 <strong>{item.title}</strong>
//                                 <small>{item.category} • {new Date(item.date).toLocaleDateString()}</small>
//                             </div>
//                             <div className="amount" style={{ color: 'red', fontWeight: 'bold' }}>
//                                 ₹{item.amount}
//                             </div>
//                             <div className="amount" style={{ color: 'red', fontWeight: 'bold' }}>
//                               Delete
//                             </div>
//                              <div className="amount" style={{ color: 'red', fontWeight: 'bold' }}>
//                              Edit
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default ExpenseList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ExpenseList.css";

const ExpenseList = ({ refreshTrigger, onActionComplete }) => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  // State for Editing
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", amount: "" });

  const fetchExpensesAndTotal = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };

      // Fetch History
      const resList = await axios.get(
        "https://vaulthub-xm1r.onrender.com/api/expenses/user",
        config,
      );
      setExpenses(resList.data);

      // Fetch Total using your aggregate backend program
      const resTotal = await axios.get(
        "https://vaulthub-xm1r.onrender.com/api/expenses/total",
        config,
      );
      setTotal(resTotal.data.totalAmount);

      setLoading(false);
    } catch (err) {
      console.error("Error:", err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpensesAndTotal();
  }, [refreshTrigger]);

  // --- DELETE LOGIC ---
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this expense?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`https://vaulthub-xm1r.onrender.com/api/expenses/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchExpensesAndTotal(); // Refresh everything
    } catch (err) {
      alert("Delete failed",err);
    }
  };

  // --- UPDATE LOGIC ---
  const handleEditClick = (item) => {
    setEditingId(item._id);
    setEditForm({ title: item.title, amount: item.amount });
  };

  const handleUpdate = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `https://vaulthub-xm1r.onrender.com/api/expenses/update/${id}`,
        editForm,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setEditingId(null);
      fetchExpensesAndTotal();
    } catch (err) {
      alert("Update failed", err);
    }
  };

  if (loading) return <p>Fetching transactions...</p>;

  return (
    <div className="expense-list-container">
      <div className="list-header">
        <h3>Recent History</h3>
        <div className="total-display">
          Total: ₹{total.toLocaleString("en-IN")}
        </div>
      </div>

      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <ul className="expense-ul">
          {expenses.map((item) => (
            <li key={item._id} className="expense-card">
              {editingId === item._id ? (
                /* EDIT MODE */
                <div className="edit-mode-container">
                  <input
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm({ ...editForm, title: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    value={editForm.amount}
                    onChange={(e) =>
                      setEditForm({ ...editForm, amount: e.target.value })
                    }
                  />
                  <button
                    className="save-btn"
                    onClick={() => handleUpdate(item._id)}
                  >
                    Save
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                /* DISPLAY MODE */
                <>
                  <div className="info">
                    <strong>{item.title}</strong>
                    <small>
                      {item.category} •{" "}
                      {new Date(item.date).toLocaleDateString()}
                    </small>
                  </div>
                  <div className="amt-actions">
                    <div className="amount-val">₹{item.amount}</div>
                    <button
                      className="edit-icon"
                      onClick={() => handleEditClick(item)}
                    >
                      ✏️
                    </button>
                    <button
                      className="delete-icon"
                      onClick={() => handleDelete(item._id)}
                    >
                      🗑️
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
