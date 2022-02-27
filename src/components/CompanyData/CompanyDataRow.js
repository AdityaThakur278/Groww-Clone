import React from "react"
import BuySellButton from "./BuySellButton";
import "./CompanyDataRow.css"

function priceChangeStyle(value) {
    if(parseFloat(value) < 0) {
        return "change-neg";
    }
    else {
        return "change-pos";
    }
}

function CompanyDataRow(props) {
    const priceChangeStyleValue = priceChangeStyle(props.percentageChange);

    return (
        <div className="company-row">
            <p className="company">{props.company}</p>

            <div className="market-price">
                <p className="price">₹{props.ltp}</p>
                <p className={priceChangeStyleValue}>{props.ptsChange}({props.percentageChange}%)</p>
            </div>

            {/* Pass onclick methods from props*/}
            <BuySellButton type="buy" company={props.company} buySelect={props.buySelect}/> 
            <BuySellButton type="sell" company={props.company} sellSelect={props.sellSelect}/>
        </div>
    );
}

export default CompanyDataRow;