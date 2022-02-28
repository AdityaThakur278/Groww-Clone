import React from "react";

import "./BuySellTransaction.css"

function BuySellTransaction(props) {

    const buttonStyle = props.buyTab ? "buy-style" : "sell-style";
    const innerContent = props.buyTab ? "BUY" : "SELL";
    
    function handleClick() {
        props.buySellTransaction(innerContent.charAt(0));
    }

    return (
        <button 
            className={"buy-sell-button " + buttonStyle}
            onClick={handleClick}
        >
            {innerContent}
        </button>
    );
}

export default BuySellTransaction;