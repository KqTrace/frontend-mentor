import React from "react";
import ReactDOM from "react-dom";
import ThreeHands from "./ThreeHands";

function Game(){
    return (
        <div className="game-container d-flex justify-content-center align-items-center mt-4">
            <ThreeHands />
        </div>
    );
}

export default Game;