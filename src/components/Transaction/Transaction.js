import React from "react";
import TransactionTable from "./TransactionTable"
import "./Transaction.css"

function Transaction(props) {
    return (
        <div className="transaction">
            <TransactionTable 
                type="Pending" 
                transactionArray={props.pendingTransaction}
            />
            <TransactionTable 
                type="Completed" 
                transactionArray={props.completeTransaction}
            />
        </div>
    );
}

export default Transaction;