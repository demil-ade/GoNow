import React from "react";
import Input from "../components/Input/Input";

function Business(){
    const date = new Date();

    return(
        <div className="Business-page">
            <div className="top">
                <p className="top__logo">GoNow</p>
                <div className="top__navbar">
                    <p className="top__navbar__link">Home</p>
                    <p className="top__navbar__link">Create tasks</p>
                    <p className="top__navbar__link">For Business</p>
                </div>
                <div className="top__GoNow">Go Now</div>
                <div className="top__menu-button">
                    <img src="./images/menu.png" className="menu"/>
                    <div class="dropdown-content">
                        <a href="#">Home</a>
                        <a href="#">Create tasks</a>
                        <a href="#">For Business</a>
                    </div>
                </div>
            </div>
           <div className="page-description">
                <img src="./images/business-mobile.png" className="page-description__image-mobile"/>
                <div className="page-description__info">
                    <p className="page-description__info__one">Outsource your simple but time-consuming tasks</p>
                    <p className="page-description__info__two">Get them done in record time, at great rates and increase your social impact while at it</p>
                </div>
                <img src="./images/business.png" className="page-description__image"/>
            </div>
            <div className="signup-form">
                <p className="signup-form__header">Sign up to create a task</p>
                <div className="signup-form__info">
                    <Input className='signup-form__info__first-name' placeholder ="First Name" type="text"/>
                    <Input className='signup-form__info__last-name' placeholder ="Last Name" type="text"/>
                    <Input className='signup-form__info__email' placeholder ="Email Address" type="email"/> 
                    <Input className='signup-form__info__whatsapp-number' placeholder ="Whatsapp Number" type="text"/>
                    <div className="signup-form__info__button">Go Now</div>
                </div>
            </div>
            <div className="footer">
                <div className="footer__top">
                    <div className="footer__top__about">
                        <p className="footer__top__about__logo">GoNow</p>
                        <p className="footer__top__about__description">In vestibulum mi vel orci fermentum, a mollis elit dictum. 
                        Aenean iaculis, tortor varius efficitur pulvina</p>
                    </div>
                    <div className="footer__top__options-one">
                        <p>Resources</p>
                        <p>FAQ</p>
                        <p>For Business</p>
                    </div>
                    <div className="footer__top__options-two">
                        <p>Company</p>
                        <p>Careers</p>
                        <p>Blog</p>
                    </div>
                    <div className="footer__top__options-three">
                        <div className="footer__top__options-three__contact">
                            <div className="footer-email">
                                <img className="footer-email__icon" src="./images/mail.png"/>
                                <p>info@gonow.com</p>
                            </div>
                            <div className="footer-contact">
                                <img className="footer-contact__icon" src="./images/phone-call.png"/>
                                <p>0810 0000 000</p>
                            </div>
                        </div>
                        <div className="socials">
                            <p className="socials__text">Follow us</p>
                            <div className="socials__handles">
                                <img className="socials__handles__icons" src="./images/facedbook.png"/>
                                <img className="socials__handles__icons" src="./images/instagram.png"/>
                                <img className="socials__handles__icons" src="./images/linkedin.png"/>
                                <img className="socials__handles__icons" src="./images/twitter.png"/>
                                <img className="socials__handles__icon" src="./images/facedbook-two.png"/>
                                <img className="socials__handles__icon" src="./images/instagram-two.png"/>
                                <img className="socials__handles__icon" src="./images/linkedin-two.png"/>
                                <img className="socials__handles__icon" src="./images/twitter-two.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="copyright">Copyright © {date.getFullYear()} gonow</p>
            </div>
        </div>
    )
}
export default Business;