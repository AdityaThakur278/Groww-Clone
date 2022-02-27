import React from "react";

import AssetsHeading from "./AssetsHeading";
import AssetsTable from "./AssetsTable";
import "./Assets.css"

function Assets() {
    return (
        <div className="asset">
            <AssetsHeading/>
            <AssetsTable/>
        </div>
    );
}

export default Assets;