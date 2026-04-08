import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from "react-router-dom";
import ExpenseList from "./ExpenseList";
import "./ExpenseTracker.css"

const ExpenseTracker = () => {
  const navigate = useNavigate();
  return (
    <div className="expense-tracker-page" style={{ padding: "20px" }}>
      <h2>💰 My Expense Tracker</h2>
      
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        <ExpenseForm />
        <div className="list-section">
         </div>
      <ExpenseList /> <button style={{height:"40px"}} onClick={() => navigate("/expense-list")}>History</button>
    </div>
          {/* This is where your Total and List will go */}
          
        </div>
     
  );
};

export default ExpenseTracker;

// import React, { useState } from "react"; // 1. Import useState
// import ExpenseForm from "./ExpenseForm";
// import ExpenseList from "./ExpenseList";

// const ExpenseTracker = () => {
//   // 2. Create a state to track if history is visible
//   const [showHistory, setShowHistory] = useState(false);

//   return (
//     <div className="expense-tracker-page" style={{ padding: "20px" }}>
//       <h2>💰 My Expense Tracker</h2>
//       <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
//         <ExpenseForm />

//         <div className="list-section">
//           {/* 3. Change the button logic to toggle state instead of navigating */}
//           <button onClick={() => setShowHistory(!showHistory)}>
//             {showHistory ? "Hide History" : "Show History"}
//           </button>

//           {/* 4. Conditionally render the list right here */}
//           {showHistory && (
//             <div style={{ marginTop: "20px" }}>
//               <ExpenseList />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpenseTracker;

// import React, { useState } from "react";
// import ExpenseForm from "./ExpenseForm";
// import ExpenseList from "./ExpenseList";

// const ExpenseTracker = () => {
//   // This state acts as a "trigger"
//   const [refreshTrigger, setRefreshTrigger] = useState(0);

//   // Function to increment the trigger
//   const handleRefresh = () => {
//     setRefreshTrigger((prev) => prev + 1);
//   };

//   return (
//     <div className="expense-tracker-page" style={{ padding: "20px" }}>
//       <h2>💰 My Expense Tracker</h2>
//       <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
//         {/* Pass the function to the Form */}
//         <ExpenseForm onExpenseAdded={handleRefresh} />

//         <div className="list-section">
//           <h3>History</h3>
//           {/* Passing the refreshTrigger as a KEY forces the component to re-mount/re-fetch */}
//           <ExpenseList key={refreshTrigger} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpenseTracker;
