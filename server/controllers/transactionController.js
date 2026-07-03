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
    const transactions = await Transaction.find();
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