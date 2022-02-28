import React from "react";

import "./BuySellPrice.css"

function BuySellPrice(props) {
    return (
        <div className="buy-sell-price">
            <p className="buy-sell-price-text">Market Price</p>
            <p className="buy-sell-market-price">{props.marketPriceValue ? "₹" + props.marketPriceValue : "NULL"}</p>
        </div>
    );
}

export default BuySellPrice;