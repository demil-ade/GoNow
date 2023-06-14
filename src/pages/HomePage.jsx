import React from "react";
import Inputtwo from "../components/Input/Inputtwo";
import Header from "../components/Header/Header";

function Homepage(){
    const date = new Date();

    return(
        <div className="Home-page">
            <Header/>
            
            <div className="description">
                    <img src="./images/hero-image-mobile.png" className="image-mobile"/>
                    <div className="description__info">
                        <p className="description__info__one">Learn, Earn Money & Get Connected</p>
                        <p className="description__info__two">Learn industry required skills, earn money while doing so and get connected to your future employer.</p>
                    </div>
                    <img src="./images/hero-image.png" className="image"/>
            </div>
            <div className="get-started">
                <img src="./images/getstarted-mobile.png" className="get-started__image__two"/>
                <img src='./images/getstarted.png' className="get-started__image"/>
                <div className="get-started__text">
                    <p className="get-started__text__step">Get started in 3 easy steps</p>
                    <div className="get-started__text__steps">
                        <div>
                            <img src ="./images/youtube.png" className="images"/>
                            <p className="get-started__text__step__one">Watch online learning videos.</p>
                        </div>
                        <div>
                            <img src="./images/clipboard-list.png" className="images"/>
                            <p className="get-started__text__step__two">Get assigned to tasks and earn money.</p>
                        </div>
                        <div>
                            <img src="./images/rocket.png" className="images"/>
                            <p className="get-started__text__step__three">Get access to interview coaching for your career.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form">
                <img src="./images/Group-mobile.png" className="form__images__two"/>
                <img src="./images/Group.png" className="form__images"/>
                <div className="form__info">
                    <p className="form__info__big">I am interested</p>
                    <p className="form__info__small">Curabitur sollicitudin elit est vitae placerateros convallis eu. Must be between age 15-24.</p>
                    <form className="form__info__details">
                        <Inputtwo className='full-name' placeholder ="   Full Name" type="text"/>
                        <Inputtwo className='phone-number' placeholder ="   Phone Number" type="text"/>
                        <Inputtwo className='email' placeholder ="   Email Address" type="email"/> 
                        <select className="education-level" id="education-level"> 
                            <option value="highest-education-level"> Highest level of Education</option>
                            <option value=""></option> 
                            <option value="">Dave</option> 
                            <option value="">Pumpernickel</option> 
                            <option value="">Reeses</option> 
                        </select>
                        <div className="form__info__details__button">Sign up</div>
                    </form>
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
export default Homepage;