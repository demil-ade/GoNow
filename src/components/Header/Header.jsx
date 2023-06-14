import React from "react";

function Header(){
    return(
        <div className="top">
            <p className="top__logo">GoNow</p>
            <div className="top__navbar">
                <p className="top__navbar__link">Home</p>
                <p className="top__navbar__link">Create tasks</p>
                <p className="top__navbar__link">For Business</p>
            </div>
            <div className="top__GoNow">Go Now</div>
            <div className="top-panel__menu-button">
                <img src="./images/menu.png" className="menu"/>
                <div class="dropdown-content">
                    <a href="#">Home</a>
                    <a href="#">Create tasks</a>
                    <a href="#">For Business</a>
                </div>
            </div>
        </div>
    )
}
export default Header;