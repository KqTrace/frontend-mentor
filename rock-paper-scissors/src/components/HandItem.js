import React from "react";
import ReactDOM from "react-dom";

function HandItem(props){
    return(
        <div className="circle d-flex align-items-center justify-content-center">
            <img src={props.image} />
        </div>
    );
}

export default HandItem;