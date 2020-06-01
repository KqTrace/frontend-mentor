import React from "react";
import ReactDOM from "react-dom";

function HandItem(props){
    return(
        <div className="circle d-flex align-items-center justify-content-center" style={{borderColor: props.color}}>
            <div className="circle-behind" style={{backgroundColor: props.behindcolor}}></div>
            <img src={props.image} />
        </div>
    );
}

export default HandItem;