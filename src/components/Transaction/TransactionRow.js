import React from "react";

import "./TransactionRow.css"

function TransactionRow(props) {

    function transactionTypeStyle() {
        if(props.type === "B") return "transaction-type-buy";
        else if(props.type ==="S") return "transaction-type-sell";
    }

    return (
        <div className="company-row">
            <p className={transactionTypeStyle()}>{props.type}</p>
            <p className="company-name">{props.company}</p>
            <p className="target-price">{props.price}</p>
            <p className="quantity">{props.quantity}</p>
            <p className="total">{props.total}</p>
        </div>
    );
}

export default TransactionRow;