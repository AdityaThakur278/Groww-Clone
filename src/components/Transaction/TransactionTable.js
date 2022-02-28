import React from "react";

import TransactionRow from "./TransactionRow";
import "./TransactionTable.css"

function TransactionTable(props) {

    const transactionArray = props.transactionArray;
    let transactionID = 0;

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

                {
                    transactionArray.length === 0 
                    ? (
                        <div className="no-transaction">
							No Transactions
						</div>
                    ) 
                    : (
                        transactionArray.map(obj => {
                            return <TransactionRow 
                                        key={transactionID++}
                                        type={obj.type}
                                        company={obj.company}
                                        price={obj.price}
                                        quantity={obj.quantity}
                                        total={obj.total}
                                    />
                        })
                    ) 
                }
            </div>
        </div>
    );
}

export default TransactionTable;