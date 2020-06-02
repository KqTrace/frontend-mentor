import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import GameBegin from "../components/GameBegin"

function Page(){
    return (
    <div className="container-fluid p-3">
    <GameBegin />
    </div>);
}

export default Page;