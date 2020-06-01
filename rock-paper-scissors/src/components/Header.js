import React from "react";
import ReactDOM from "react-dom";

function Header(){
    return (
        <div className="header bordab d-flex justify-content-center align-items-center">
            <div className="scorenav">
                <div className="row m-0">
                    <div className="col-8 p-0">
                        <div id="title">
                        <h1 className="text-uppercase">Rock<br/>Paper<br/>Scissors</h1>
                        </div>
                    </div>
                    <div className="col-4 p-0 d-flex justify-content-end">
                        <div id="score" className="text-center">
                           <p className="text-uppercase">Score</p>
                           <p className="numscore">12</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;