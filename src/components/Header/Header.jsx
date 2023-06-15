import React from "react";
import { useNavigate } from "react-router";

function Header(){

    const route = useNavigate();

    return(
        <div className="top">
            <p className="top__logo">GoNow</p>
            <div className="top__navbar">
                <p className="top__navbar__link" onClick={() => route('/')}>Home</p>
                <p className="top__navbar__linktwo">Create tasks</p>
                <p className="top__navbar__linkthree" onClick={() => route('/business')}>For Business</p>
            </div>
            <div className="top__GoNow">Go Now</div>
            <div className="top-panel__menu-button">
                <img src="./images/menu.svg" className="menu"/>
                <div class="dropdown-content">
                    <p onClick={() => route('/')}>Home</p>
                    <p>Create tasks</p>
                    <p onClick={() => route('/business')}>For Business</p>
                </div>
            </div>
        </div>
    )
}
export default Header;