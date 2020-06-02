import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header"
import Game from "../components/Game"
import Bottom from "../components/Bottom"

function GameBegin(){
    return (
            <React.Fragment>
            <Header />
            <Game />
            <Bottom />
            </React.Fragment>
        );
}

export default GameBegin;