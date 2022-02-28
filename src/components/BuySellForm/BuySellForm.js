import React from "react";

import BuySellQuantity from "./BuySellQuantity";
import BuySellTargetPrice from "./BuySellTargetPrice";
import BuySellPrice from "./BuySellPrice";
import BuySellTransaction from "./BuySellTransaction";
import "./BuySellForm.css";

function BuySellForm(props) {
    const buyTab = props.buyTab ? "selected" : "";
    const sellTab = props.buyTab ? "" : "selected";

    function buyTabSelect() {
        props.setBuyTab(true);
    }

    function sellTabSelect() {
        props.setBuyTab(false);
    }

    return (
        <div className="buy-sell-form">
            <div className="company-name">{props.company}</div>

            <div className="buy-sell-sub-container">
                <div className="buy-sell-tab">
                    <p className={"buy-sell-tab-item " + buyTab} onClick={buyTabSelect}>BUY</p>
                    <p className={"buy-sell-tab-item " + sellTab} onClick={sellTabSelect}>SELL</p>
                    <p className="units-owned">Shares Owned - {props.sharesOwned}</p>
                </div>

                <BuySellQuantity 
                    shareQuantityValue={props.shareQuantityValue}
                    setShareQuantityValue={props.setShareQuantityValue}
                />
                <BuySellTargetPrice 
                    targetPrice={props.targetPrice}
                    setTargetPrice={props.setTargetPrice}
                />
                <BuySellPrice marketPriceValue={props.marketPriceValue} />

                <p className="buy-sell-info">
                    Order will expire when market closes today
                </p>

                <BuySellTransaction 
                    buyTab={props.buyTab} 
                    buySellTransaction = {props.buySellTransaction}
                />
            </div>
        </div>
    );
}

export default BuySellForm;
