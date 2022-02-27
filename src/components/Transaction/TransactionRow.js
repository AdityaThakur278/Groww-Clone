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
            <p className="company-name">HDFC Bank</p>
            <p className="target-price">805.05</p>
            <p className="quantity">15</p>
            <p className="total">12075.75</p>
        </div>
    );
}

export default TransactionRow;