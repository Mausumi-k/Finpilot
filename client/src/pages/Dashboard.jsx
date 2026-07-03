import { useState, useEffect } from "react";
import axios from "axios";

import "./Dashboard.css";

import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import ExpenseChart from "../components/ExpenseChart";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  // Fetch all transactions
  const fetchTransactions = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/transactions"
      );

      setTransactions(res.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  // Fetch data when page loads
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Calculate totals
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((sum, transaction) => sum + Number(transaction.amount), 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((sum, transaction) => sum + Number(transaction.amount), 0);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
    <h1>👋 Welcome Back!</h1>
    <p>Track your income and expenses with FinPilot.</p>
</div>

      <SummaryCards
        income={income}
        expense={expense}
      />

      <div className="dashboard-content">
        <TransactionForm
          fetchTransactions={fetchTransactions}
        />

        <TransactionList
          transactions={transactions}
          fetchTransactions={fetchTransactions}
        />

       <div className="chart-section">
    <ExpenseChart
        income={income}
        expense={expense}
    />
</div>
      </div>
    </div>
  );
}

export default Dashboard;