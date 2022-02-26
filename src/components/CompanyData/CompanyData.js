import React from "react";

import CompanyDataRow from "./CompanyDataRow"
import "./CompanyData.css"

function CompanyData() 
{
    return (
        <div className="company-data">
            <div className="heading">
                <p className="top-heading">Top by Market Cap</p>
                <p className="nifty">NIFTY50</p>
            </div>

            <div className="table">
                <div className="table-heading">
                    <p className="company">Company</p>
                    <p className="market-price">Market Price</p>
                    <p className="buy">Buy</p>
                    <p className="sell">Sell</p>
                </div>

                <CompanyDataRow company={"TATAMOTORS"} ltp={"460.85"} ptsChange={"31.80"} percentageChange={"7.55"}/>
            </div>
		</div>
    );
}

export default CompanyData;