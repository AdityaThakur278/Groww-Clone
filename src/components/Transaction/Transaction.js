import React from "react";
import TransactionTable from "./TransactionTable"
import "./Transaction.css"

function Transaction(props) {
    return (
        <div className="transaction">
            <TransactionTable type="Pending"/>
            <TransactionTable type="Completed"/>
        </div>
    );
}

export default Transaction;