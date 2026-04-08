import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                // 1. Get the token from localStorage
                const token = localStorage.getItem('token');

                // 2. Setup Axios Config with the Token (Bearer)
                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };

                // 3. Hit the backend route you wrote
                const res = await axios.get('http://localhost:5000/api/expenses/user', config);

                // 4. Update state with the database results
                setExpenses(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching expenses:", err.response?.data?.message || err.message);
                setLoading(false);
            }
        };

        fetchExpenses();
    }, []);

    if (loading) return <p>Fetching your transactions...</p>;

    return (
        <div className="expense-list-container">
            <h3>Recent History</h3>
            {expenses.length === 0 ? (
                <p>No expenses found. Start adding some!</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {expenses.map((item) => (
                        <li key={item._id} className="expense-card">
                            <div className="info">
                                <strong>{item.title}</strong>
                                <small>{item.category} • {new Date(item.date).toLocaleDateString()}</small>
                            </div>
                            <div className="amount" style={{ color: 'red', fontWeight: 'bold' }}>
                                ₹{item.amount}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExpenseList;