import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header"
import Game from "../components/Game"

function GameBegin(){
    return (
            <React.Fragment>
            <Header />
            <Game />
            </React.Fragment>
        );
}

export default GameBegin;