import React from "react";
import ReactDOM from "react-dom";
import HandItem from "./HandItem"

import ImgHandPaper from "../img/icon-paper.svg"
import ImgHandScissor from "../img/icon-scissors.svg"
import ImgHandRock from "../img/icon-rock.svg"

function ThreeHands(){
    return (
        <div className="threehand bordar">
            <div className="row m-0">
                <div className="col-md-5 bordag p-0 d-flex justify-content-end">
                    <HandItem image={ImgHandPaper} color="#5671f4" behindcolor="#2a45b9"/>
                </div>
                <div className="col-md-5 offset-md-2 bordab p-0 d-flex justify-content-left">
                    <HandItem image={ImgHandScissor} color="#eca821" behindcolor="#c56b1d"/>
                </div>
            </div>
            <div className="row m-0 d-flex justify-content-center align-items-center pt-4">
            <HandItem image={ImgHandRock} color="#dd415f" behindcolor="#991833" />
            </div>
        </div>
    );
}

export default ThreeHands;