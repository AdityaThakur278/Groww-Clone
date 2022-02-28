import React from "react";

import "./BuySellQuantity.css"

function BuySellQuantity(props) {

    function handleShareQuantityChange(event) {
        const value = event.target.value;
        props.setShareQuantityValue(value);
    }

    return (
        <div className="buy-sell-quantity">
            <label className="quantity-label" htmlFor="shareQuantity">Share Quantity</label>
			<input 
                className="quantity-input" 
                type="text" 
                name="shareQuantity" 
                value={props.shareQuantityValue}
                onChange={handleShareQuantityChange}
            />
        </div>
    );
}

export default BuySellQuantity;