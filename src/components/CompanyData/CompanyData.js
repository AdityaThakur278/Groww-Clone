import React from "react";

import CompanyDataRow from "./CompanyDataRow"
import "./CompanyData.css"

function CompanyData(props) {
    const data = props.data;

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

                <div className="table-content">
                {
                    props.loading 
                    ?   (<div className="loading">
                            Loading...
                        </div>)
                    :   data.map(obj => {
                            return <CompanyDataRow
                                        key={obj.company} 
                                        company={obj.company} 
                                        ltp={obj.ltp} 
                                        ptsChange={obj.ptsChange} 
                                        percentageChange={obj.percentageChange}
                                        buySelect = {props.buySelect}
                                        sellSelect = {props.sellSelect}
                                    />
                        })  
                }
                </div>

            </div>
		</div>
    );
}

export default CompanyData;