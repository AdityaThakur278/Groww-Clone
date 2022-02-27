import React from "react";
import "./BuySellButton.css"


function BuySellButton(props) { 

    function onClickHandler() {
        if(props.type === "buy") return props.buySelect;
        else if(props.type === "sell") return props.sellSelect;
    }

    const className = props.type + "-button";
    const id = props.type + "1-" + props.company; 
    const innerHTML = props.type.charAt(0).toUpperCase();

    return (
        <p className={props.type}>
            <button className={className} id={id} onClick={onClickHandler()}>{innerHTML}</button>
        </p>
    );
}

export default BuySellButton;