import React from "react";
import ReactDOM from "react-dom";
import Img from "../img/logo.svg"

function Header(){
    return (

        //CRIAR DUAS ROWS DENTRO DE HEADER
        <div className="header d-flex justify-content-sm-center justify-content-between align-items-start bordab">
            <div className="scorenav">
                <div className="row m-0">
                    <div className="col-8 p-0">
                        <div id="title">
                            <img src={Img}></img>
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
            <div className="profile-container bordar d-flex justify-content-end align-items-start">
                <i className="fas fa-user-circle"></i>
            </div>
        </div>
    );
}

export default Header;