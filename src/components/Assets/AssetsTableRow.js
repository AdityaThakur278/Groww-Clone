import React from "react";

import "./AssetsTableRow.css"

function AssetsTableRow() {
    return (
        <div className="table-row">
            <p className="company-name">HDFC</p>
            <p className="average-price">1032.23</p>
            <p className="quantity">10</p>
            <p className="total">10322.33</p>
        </div>
    );
}

export default AssetsTableRow;