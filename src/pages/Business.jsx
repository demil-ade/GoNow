import React from "react";
import Input from "../components/Input/Input";

function Business(){
    const date = new Date();

    return(
        <div className="Home-page">
            <div className="top-panel">
                <p className="logo">GoNow</p>
                <div className="nav">
                    <p className="link">Home</p>
                    <p className="link">Create tasks</p>
                    <p className="link">For Business</p>
                </div>
                <div className="GoNow">Go Now</div>
            </div>
            <div className="description">
                    <div className="description__info">
                        <p className="description__info__one">Outsource your simple but time-consuming tasks</p>
                        <p className="description__info__two">Get them done in record time, at great rates and increase your social impact while at it</p>
                    </div>
                    <img src="./images/business.png" className="image"/>
            </div>
        </div>
    )
}
export default Business;