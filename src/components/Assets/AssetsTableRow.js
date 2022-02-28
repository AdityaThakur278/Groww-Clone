import React, { useEffect } from "react";

import "./AssetsTableRow.css"

function AssetsTableRow(props) {

    function handleClick() {
        props.setBuySellCompany(props.company);
        props.setBuyTab(false);
        props.handleSharesOwned(props.company);

        const index = props.mapCompany[props.company];
		const marketPrice = props.data[index].ltp;
		props.setMarketPriceValue(marketPrice);
    }

    return (
        <div className="table-row" onClick={handleClick}>
            <p className="company-name">{props.company}</p>
            <p className="average-price">{props.price}</p>
            <p className="quantity">{props.quantity}</p>
            <p className="total">{props.total}</p>
        </div>
    );
}

export default AssetsTableRow;