import React from "react";

import AssetsTableRow from "./AssetsTableRow";
import "./AssetsTable.css"

function AssetsTable(props) {

    const assetsList = props.assetsList;

    return (
        <div className="table">
            <div className="table-heading">
                <p className="company-name">Company</p>
                <p className="average-price">Price</p>
                <p className="quantity">Units</p>
                <p className="total">Total</p>
            </div>

            {
                assetsList.map(asset => {
                    return  <AssetsTableRow 
                                key={asset.company}
                                company={asset.company}
                                price={asset.price}
                                quantity={asset.quantity}
                                total={asset.total}
                                data={props.data}
				                mapCompany={props.mapCompany}
                                setBuySellCompany={props.setBuySellCompany}
                                setBuyTab={props.setBuyTab}
                                handleSharesOwned={props.handleSharesOwned}
                                setMarketPriceValue={props.setMarketPriceValue}
                            />
                })
            }
        </div>
    );
}

export default AssetsTable;