import React from "react";
import ReactDOM from "react-dom";

function HandItem(props){
    return(
        <div className="moldura">
        <div className="circle-behind" id={props.circlecolor} style={{backgroundColor: props.behindcolor}}></div>
        <div className="circle d-flex align-items-center justify-content-center" id={props.id} style={{borderColor: props.color}}>
            <img src={props.image} />
        </div>
        </div>
    );
}

export default HandItem;