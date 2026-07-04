import { useState, useEffect } from "react";
import axios from "axios";

import "./Dashboard.css";

import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import ExpenseChart from "../components/ExpenseChart";
import MonthlySummary from "../components/MonthlySummary";

function Dashboard() {

  const [transactions, setTransactions] = useState([]);

  // "" = All transactions by default
  const [selectedFilter, setSelectedFilter] = useState("");

  const fetchTransactions = async (filter = "") => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/transactions?filter=${filter}`
      );

      setTransactions(res.data);

    } catch (error) {

      console.error("Error fetching transactions:", error);

    }

  };

  useEffect(() => {

    fetchTransactions(selectedFilter);

  }, [selectedFilter]);

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

      <div className="filter-bar">

        <button
          className={selectedFilter === "" ? "active-filter" : ""}
          onClick={() => setSelectedFilter("")}
        >
          All
        </button>

        <button
          className={selectedFilter === "today" ? "active-filter" : ""}
          onClick={() => setSelectedFilter("today")}
        >
          Today
        </button>

        <button
          className={selectedFilter === "week" ? "active-filter" : ""}
          onClick={() => setSelectedFilter("week")}
        >
          Week
        </button>

        <button
          className={selectedFilter === "month" ? "active-filter" : ""}
          onClick={() => setSelectedFilter("month")}
        >
          Month
        </button>

        <button
          className={selectedFilter === "year" ? "active-filter" : ""}
          onClick={() => setSelectedFilter("year")}
        >
          Year
        </button>

      </div>

      <SummaryCards
        income={income}
        expense={expense}
      />

      <div className="dashboard-content">

        <TransactionForm
          fetchTransactions={() => fetchTransactions(selectedFilter)}
        />

        <TransactionList
          transactions={transactions}
          fetchTransactions={() => fetchTransactions(selectedFilter)}
        />

      </div>

      <div className="analytics">

        <ExpenseChart
          income={income}
          expense={expense}
        />

        <MonthlySummary
          income={income}
          expense={expense}
          transactions={transactions}
        />

      </div>

    </div>

  );

}

export default Dashboard;