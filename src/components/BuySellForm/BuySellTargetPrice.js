import React from "react";

import "./BuySellTargetPrice.css"

function BuySellTargetPrice(props) {

    function handleTargetPriceChange(event) {
        const value = event.target.value;
        props.setTargetPrice(value);
    }

    return (
        <div className="buy-sell-target-price">
            <label className="target-price-label" htmlFor="target-price">Target Price</label>
            <input 
                className="target-price-input" 
                type="text" 
                name="target-price" 
                value={props.targetPrice} 
                onChange={handleTargetPriceChange}
            />
        </div>
    );
}

export default BuySellTargetPrice;