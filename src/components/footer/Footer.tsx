import React from 'react';
import './Footer.css';
import {ReactComponent as FooterLogo} from "../../assets/images/footer-logo.svg";
import {ReactComponent as FacebookIcon} from "../../assets/images/facebook-icon.svg";
import {ReactComponent as YoutubeIcon} from "../../assets/images/youtube-icon.svg";
import {ReactComponent as TwitterIcon} from "../../assets/images/twitter-icon.svg";
import {ReactComponent as LinkedinIcon} from "../../assets/images/linkedin-icon.svg";

interface FooterProps {

}

const Footer = () => {
    return (
        <div className="footer-container-wrapper">
            <div className="footer-container">
                <div className="footer-upper-container">
                    <div className="footer-presentation">
                        <FooterLogo/>
                        <p>©2023 Mining Nest. All Rights Reserved.</p>
                    </div>
                    <div className="footer-links-container">
                        <section>
                            <h3>Resources</h3>
                            <a href="#">Crypto Development</a>
                            <a href="#">Our Servers</a>
                            <a href="#">Our Products</a>
                            <a href="#">User Strategy</a>
                        </section>
                        <section>
                            <h3>Company</h3>
                            <a href="#">About Coin Forge</a>
                            <a href="#">Contact & Support</a>
                            <a href="#">Success History</a>
                            <a href="#">Setting & Privacy</a>
                        </section>
                        <section>
                            <h3>Quick Links</h3>
                            <a href="#">Home</a>
                            <a href="#">Our Services</a>
                            <a href="#">Blog</a>
                            <a href="#">About Us</a>
                        </section>
                    </div>
                </div>

                <hr/>

                <div className="footer-lower-container">
                        <section>
                            <a href="">Legal</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Cookies Policy</a>
                        </section>
                        <section>
                            <FacebookIcon/>
                            <YoutubeIcon/>
                            <TwitterIcon/>
                            <LinkedinIcon/>
                        </section>
                </div>
            </div>

        </div>
    );
};

export default Footer;