import { useState } from "react";
import axios from "axios";
import "./TransactionForm.css";

function TransactionForm({ fetchTransactions }) {
  const [formData, setFormData] = useState({
  title: "",
  amount: "",
  type: "income",
  category: "Others",
  note: "",
  date: new Date().toISOString().split("T")[0],
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/transactions",
        formData
      );

     setFormData({
  title: "",
  amount: "",
  type: "income",
  category: "Others",
  note: "",
  date: new Date().toISOString().split("T")[0],
});

      fetchTransactions();

    } catch (error) {
      alert("Error adding transaction");
      console.log(error);
    }
  };

  return (
    <div className="form-card">

      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />
         <select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        />  

        <textarea
        name="note"
        placeholder="Add a note..."
        rows="3"
        value={formData.note}
        onChange={handleChange}
        />      

        <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        >
       

        <option>Salary</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Healthcare</option>
        <option>Education</option>
        <option>Others</option>
        </select>

        <button>Add Transaction</button>

      </form>

    </div>
  );
}

export default TransactionForm;