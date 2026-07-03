import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./ExpenseChart.css";

function ExpenseChart({ income, expense }) {
    if (income === 0 && expense === 0) {
    return (
      <div className="chart-card">
        <h2>Income vs Expense</h2>
        <p>No data available yet.</p>
      </div>
    );
  }

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  const COLORS = ["#16a34a", "#dc2626"];

  return (
    <div className="chart-card">
      <h2>Income vs Expense</h2>

      <ResponsiveContainer width="100%" height={420}>
        <PieChart>
          <Pie
  data={data}
  dataKey="value"
  outerRadius={150}
  labelLine={false}
  label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
>
            
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}

            label={({ percent }) =>
            `${(percent * 100).toFixed(0)}%`
}
            
          </Pie>
            <Tooltip
            formatter={(value) =>
                `₹${Number(value).toLocaleString("en-IN")}`
            }
            />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;