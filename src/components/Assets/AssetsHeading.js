import React from "react";

import "./AssetsHeading.css"

function AssetsHeading(props) {
    return (
        <div className="heading-wrapper">
            <div className="heading">
                <p className="heading-name">Assets</p>
            </div>
            
            <div className="total-investment">
                <p className="text">Total Investment</p>
                <p className="value">₹{props.totalInvestment}</p>
            </div>
        </div>
    );
}

export default AssetsHeading;