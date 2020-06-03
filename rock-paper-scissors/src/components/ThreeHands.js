import React from "react";
import ReactDOM from "react-dom";
import HandItem from "./HandItem"

import ImgHandPaper from "../img/icon-paper.svg"
import ImgHandScissor from "../img/icon-scissors.svg"
import ImgHandRock from "../img/icon-rock.svg"

function ThreeHands(){
    return (
        <div className="threehand">
            <div className="row m-0">
                <div className="col-5 p-0 d-flex justify-content-end">
                    <HandItem image={ImgHandPaper} color="#5671f4" behindcolor="#2a45b9" id="blue" circlecolor="behindblue"/>
                </div>
                <div className="col-5 offset-2 p-0 d-flex justify-content-left">
                    <HandItem image={ImgHandScissor} color="#eca821" behindcolor="#c56b1d" id="yellow" circlecolor="behindyellow"/>
                </div>
            </div>
            <div className="row m-0 d-flex justify-content-center align-items-center pt-4">
            <HandItem image={ImgHandRock} color="#dd415f" behindcolor="#991833" id="red" circlecolor="behindred"/>
            </div>
        </div>
    );
}

export default ThreeHands;