import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        category: 'Food', // Default value
        date: new Date().toISOString().split('T')[0] // Default to today
    });

   const [newForm,setNewForm]=useState('')
  
    const { title, amount, category, date } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    function DisplayForm(event){
    setNewForm({...formData,[event.target.name]: event.target.value})
   }


    const onSubmit = async e => {
        e.preventDefault();
        
        try {
            // 1. Get the token we saved during Sign-in
            const token = localStorage.getItem('token');

            // 2. Set the headers (The "Security Badge")
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };

            // 3. Make the request
            const res = await axios.post('http://localhost:5000/api/expenses/add', formData, config);
            
            alert("Expense Added Successfully!");
            console.log(res.data);
            
            // Clear form
            setFormData({ title: '', amount: '', category: 'Food', date: new Date().toISOString().split('T')[0] });
            
        } catch (err) {
            console.error(err.response?.data?.message || "Error adding expense");
            alert(err.response?.data?.message || "Server Error");
        }
    };
    return (
        <div className="expense-form">
            <h3>Add New Expense</h3>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" placeholder="Title (e.g. Cricket Kit)" value={title} onChange={onChange} required />
                <input type="number" name="amount" placeholder="Amount" value={amount} onChange={onChange} required />
                <select name="category" value={category} onChange={onChange}>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Sports">Sports</option>
                    <option value="Bills">Bills</option>
                    <option value="Other">Other</option>
                </select>
                <input type="date" name="date" value={date} onChange={onChange} required />
                <button type="submit" onClick={DisplayForm}>Add Expense</button>
                <h2>{newForm.title}</h2>
                <h2>{newForm.amount}</h2>
                <h2>{newForm.category}</h2>
                <h2>{newForm.date}</h2>
            </form>
        </div>
    );
};

export default ExpenseForm;