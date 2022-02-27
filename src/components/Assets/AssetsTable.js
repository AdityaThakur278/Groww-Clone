import React from "react";

import AssetsTableRow from "./AssetsTableRow";
import "./AssetsTable.css"

function AssetsTable() {
    return (
        <div className="table">
            <div className="table-heading">
                <p className="company-name">Company</p>
                <p className="average-price">Price</p>
                <p className="quantity">Units</p>
                <p className="total">Total</p>
            </div>

            <AssetsTableRow/>
        </div>
    );
}

export default AssetsTable;