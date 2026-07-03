import "./SummaryCards.css";
import { FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";

function SummaryCards({ income, expense }) {
  const balance = income - expense;

  return (
    <div className="summary-container">

      <div className="card balance">
        <h3>
          <FaWallet /> Balance
        </h3>
        <h2>₹{balance.toLocaleString("en-IN")}</h2>
      </div>

      <div className="card income">
        <h3>
          <FaArrowUp /> Income
        </h3>
        <h2>₹{income.toLocaleString("en-IN")}</h2>
      </div>

      <div className="card expense">
        <h3>
          <FaArrowDown /> Expense
        </h3>
        <h2>₹{expense.toLocaleString("en-IN")}</h2>
      </div>

    </div>
  );
}

export default SummaryCards;