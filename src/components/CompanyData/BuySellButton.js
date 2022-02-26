import React from "react";
import "./BuySellButton.css"

function BuySellButton(props) { 

    const className = props.type + "-button";
    const id = props.type + "1-" + props.company; 
    const innerHTML = props.type.charAt(0).toUpperCase();

    return (
        <p className={props.type}>
            <button className={className} id={id}>{innerHTML}</button>
        </p>
    );
}

export default BuySellButton;