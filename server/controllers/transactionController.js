import Transaction from "../models/Transaction.js";
export const addTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getTransactions = async (req, res) => {
  try {
    const { filter } = req.query;

    let startDate = new Date();

    if (filter === "today") {
      startDate.setHours(0, 0, 0, 0);
    }

    else if (filter === "week") {
      startDate.setDate(startDate.getDate() - 7);
    }

    else if (filter === "month") {
      startDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        1
      );
    }

    else if (filter === "year") {
      startDate = new Date(
        startDate.getFullYear(),
        0,
        1
      );
    }

    let transactions;

    if (filter) {

      transactions = await Transaction.find({
        date: { $gte: startDate },
      }).sort({ date: -1 });

    } else {

      transactions = await Transaction.find().sort({ date: -1 });

    }

    res.json(transactions);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
export const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Transaction deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};