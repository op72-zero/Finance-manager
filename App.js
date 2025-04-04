import React, { useState } from "react";
import "./App.css";

function FinanceManager_Rajesh() {
  const [transactions_23BCE0245, setTransactions_23BCE0245] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("income");

  const addTransaction_Rajesh = () => {
    if (!amount || !description) return alert("Fill all fields, Rajesh (23BCE0245)!");
    
    if (parseFloat(amount) <= 0) return alert("Amount must be positive, Rajesh!");

    const newTransaction = {
      id: transactions_23BCE0245.length + 1,
      description,
      amount: parseFloat(amount),
      type,
    };

    setTransactions_23BCE0245([newTransaction, ...transactions_23BCE0245]);
    setAmount("");
    setDescription("");
  };

  const balance = transactions_23BCE0245.reduce(
    (acc, t) => (t.type === "income" ? acc + t.amount : acc - t.amount),
    0
  );

  return (
    <div className="container">
      <h1>Finance Manager</h1>
      <div className="balance">
        <h2>Balance: ₹{balance.toFixed(2)}</h2>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button onClick={addTransaction_Rajesh}>Add Transaction</button>
      </div>
      <ul className="transactions">
        {transactions_23BCE0245.map((t) => (
          <li key={t.id} className={t.type}>
            {t.description} <span>₹{t.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FinanceManager_Rajesh;
