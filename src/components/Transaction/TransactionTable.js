import React from "react";

import TransactionRow from "./TransactionRow";
import "./TransactionTable.css"

function TransactionTable(props) {
    return (
        <div className="transaction-table">
            <div className="heading">
                <p className="heading-name">{props.type} Transaction</p>
            </div>

            <div className="table">
                <div className="table-heading">
                    <p className="transaction-type">Type</p>
                    <p className="company-name">Company</p>
                    <p className="target-price">Target Price</p>
                    <p className="quantity">Quantity</p>
                    <p className="total">Total</p>
                </div>

                {/* Handle no transaction case */}

                <TransactionRow
                    type="B"
                    company="HDFC"
                    price="2331.30"
                    quantity="8"
                    total="2000"
                />
            </div>
        </div>
    );
}

export default TransactionTable;