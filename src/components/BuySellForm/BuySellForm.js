import React from "react";

import BuySellQuantity from "./BuySellQuantity";
import BuySellTargetPrice from "./BuySellTargetPrice";
import BuySellPrice from "./BuySellPrice";
import BuySellTransaction from "./BuySellTransaction";
import "./BuySellForm.css";

function BuySellForm() {
    return (
        <div className="buy-sell-form">
            <div className="company-name">Loading...</div>

            <div className="buy-sell-sub-container">
                <div className="buy-sell-tab"> 
                    {/* Add onClick events */}
                    <p className="buy-sell-tab-item selected">BUY</p> 
                    <p className="buy-sell-tab-item">SELL</p>
                    <p className="units-owned">Shares Owned - 0</p>
                </div>

                <BuySellQuantity/>
                <BuySellTargetPrice/>
                <BuySellPrice/>

                <p className="buy-sell-info">Order will expire when market closes today</p>

                <BuySellTransaction/>
            </div>
        </div>
    );
}

export default BuySellForm;
