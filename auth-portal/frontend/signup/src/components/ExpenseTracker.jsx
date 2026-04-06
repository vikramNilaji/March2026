import React from 'react';
import ExpenseForm from './ExpenseForm';
// import ExpenseList from './ExpenseList'; // We'll build this next

const ExpenseTracker = () => {
  return (
    <div className="expense-tracker-page" style={{ padding: '20px' }}>
      <h2>💰 My Expense Tracker</h2>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <ExpenseForm />
        <div className="list-section">
          {/* This is where your Total and List will go */}
          <h3>History</h3>
          <p>List coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;