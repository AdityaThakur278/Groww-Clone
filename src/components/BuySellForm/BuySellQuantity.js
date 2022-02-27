import React from "react";

import "./BuySellQuantity.css"

function BuySellQuantity() {
    return (
        <div className="buy-sell-quantity">
            <label className="quantity-label" for="shareQuantity">Share Quantity</label>
			<input className="quantity-input" type="text" name="shareQuantity" value="0" />
        </div>
    );
}

export default BuySellQuantity;