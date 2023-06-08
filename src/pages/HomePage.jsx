import React from "react";
import Input from "../components/Input/Input";

function Homepage(){
    const date = new Date();

    return(
        <div className="Home-page">
            <div className="top-panel">
                <div className="logo"><img src="./images/GoNow.png"/></div>
                <div className="nav">
                    <p className="link">Home</p>
                    <p className="link">Create tasks</p>
                    <p className="link">FAQ</p>
                </div>
                <div className="GoNow">Go Now</div>
            </div>
            <div className="description">
                <div className="description__information">
                    <div className="description__info">
                        <p className="description__info__one">Learn, Earn Money & Get Connected</p>
                        <p className="description__info__two">Learn industry required skills, earn money while doing so and get connected to your future employer.</p>
                    </div>
                    <img src="./images/hero-image.png" className="image"/>
                </div>
            </div>
            <div className="get-started">
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
                <div className="form__images">
                    <img src="./images/Group.png" className="form__images__one"/>
                </div>
                <div className="form__info">
                    <p className="form__info__big">I am interested</p>
                    <p className="form__info__small">Curabitur sollicitudin elit est vitae placerateros convallis eu. Must be between age 15-24.</p>
                    <form className="form__info__details">
                        <Input className='full-name' placeholder ="   Full Name" type="text"/>
                        <Input className='phone-number' placeholder ="   Phone Number" type="text"/>
                        <Input className='email' placeholder ="   Email Address" type="email"/> 
                        <select className="education-level" id="education-level"> 
                            <option value="highest-education-level"> Highest level of Education</option>
                            <option value=""></option> 
                            <option value="">Dave</option> 
                            <option value="">Pumpernickel</option> 
                            <option value="">Reeses</option> 
                        </select>
                        <button className="form__info__details__button"type='submit'>Sign up</button>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="footer__top">
                    <div className="footer__top__about">
                        <img src="./images/GoNow.png"/>
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
                                <img src="./images/mail.png"/>
                                <p>info@gonow.com</p>
                            </div>
                            <div className="footer-contact">
                                <img src="./images/phone-call.png"/>
                                <p>0810 0000 000</p>
                            </div>
                        </div>
                        <div className="socials">
                            <p className="socials__text">Follow us</p>
                            <div className="socials__handles">
                                <img src="./images/facedbook.png"/>
                                <img src="./images/instagram.png"/>
                                <img src="./images/linkedin.png"/>
                                <img src="./images/twitter.png"/>
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