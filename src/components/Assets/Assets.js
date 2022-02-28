import React from "react";

import AssetsHeading from "./AssetsHeading";
import AssetsTable from "./AssetsTable";
import "./Assets.css"

function Assets(props) {
    return (
        <div className="asset">
            <AssetsHeading/>
            <AssetsTable 
                assetsList={props.assetsList}
                setBuySellCompany={props.setBuySellCompany}
                setBuyTab={props.setBuyTab}
                handleSharesOwned={props.handleSharesOwned}
                data={props.data}
				mapCompany={props.mapCompany}
                setMarketPriceValue={props.setMarketPriceValue}
            />
        </div>
    );
}

export default Assets;