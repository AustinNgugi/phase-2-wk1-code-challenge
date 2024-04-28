// 
import React from "react";
import "./Head.css";

const Table = ({ Transactions }) => {
  return (
    <table>
      <thead className="fox">
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {Transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td className="center">{transaction.date}</td>
            <td className="center">{transaction.description}</td>
            <td className="center">{transaction.category}</td>
            <td className="center">{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
