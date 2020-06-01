import React from "react";
import ReactDOM from "react-dom";
import HandItem from "./HandItem"

import ImgHandPaper from "../img/icon-paper.svg"

function ThreeHands(){
    return (
        <div className="threehand bordar">
            <div className="row m-0">
                <div className="col-md-6 bordag p-0 d-flex justify-content-center">
                    <HandItem image={ImgHandPaper}/>
                </div>
                <div className="col-md-6 bordab p-0 d-flex justify-content-center">

                </div>
            </div>

        </div>
    );
}

export default ThreeHands;