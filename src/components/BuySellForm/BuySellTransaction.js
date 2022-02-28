import React from "react";

import "./BuySellTransaction.css"

function BuySellTransaction(props) {

    const buttonStyle = props.buyTab ? "buy-style" : "sell-style";

    return (
        <button className={"buy-sell-button " + buttonStyle}>BUY</button>
    );
}

export default BuySellTransaction;