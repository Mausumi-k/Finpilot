import "./MonthlySummary.css";

function MonthlySummary({ income, expense, transactions }) {

  const savings = income - expense;

  const savingsRate =
    income === 0
      ? 0
      : ((savings / income) * 100).toFixed(1);

  const biggestExpense =
    transactions
      .filter((t) => t.type === "expense")
      .sort((a, b) => b.amount - a.amount)[0];

  return (

    <div className="summary-box">

      <h2>Monthly Summary</h2>

      <div className="summary-row">
        <span>💰 Savings</span>
        <strong>
          ₹{savings.toLocaleString("en-IN")}
        </strong>
      </div>

      <div className="summary-row">
        <span>📈 Savings Rate</span>
        <strong>{savingsRate}%</strong>
      </div>

      <div className="summary-row">
        <span>📄 Transactions</span>
        <strong>{transactions.length}</strong>
      </div>

      <div className="summary-row">
        <span>🔥 Biggest Expense</span>

        <strong>

          {biggestExpense
            ? biggestExpense.title
            : "-"}

        </strong>

      </div>

    </div>

  );

}

export default MonthlySummary;