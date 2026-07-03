import axios from "axios";
import "./TransactionList.css";

function TransactionList({ transactions, fetchTransactions }) {

  const deleteTransaction = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/transactions/${id}`
      );

      fetchTransactions();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="transaction-list">

      <h2>Recent Transactions</h2>

      {
        transactions.length === 0 ?

        <p>No Transactions Yet</p>

        :

        transactions.map((transaction) => (

  <div
    className="transaction-item"
    key={transaction._id}
  >

    <div>

      <h3>{transaction.title}</h3>

      <p className="type">
        {transaction.type}
      </p>

    </div>

    <div className="transaction-right">

      <h3
        className={
          transaction.type === "income"
            ? "income-text"
            : "expense-text"
        }
      >
        {transaction.type === "income" ? "+" : "-"}
        ₹{Number(transaction.amount).toLocaleString("en-IN")}
      </h3>

      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        🗑
      </button>

    </div>

  </div>

))

      }

    </div>

  );

}

export default TransactionList;