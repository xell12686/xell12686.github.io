import React from 'react';

import '../styles/Footer.scss';
import logoIcon from '../images/logo.svg';
import iconFb from '../images/fb.svg';
import iconTwitter from '../images/twitter.svg';
import iconYoutube from '../images/youtube.svg';
import iconIg from '../images/ig.svg';

const Footer = () => {
    return (
        <footer className="Footer" >
            <div className="wrapper">
                <div className="row">
                    <div className="col branding">
                        <img src={logoIcon} className="app-logo" alt="logo" />
                        <h2 className="app-title">LostPetFund</h2> 
                        <span>&copy; {(new Date().getFullYear())}</span>
                    </div>
                    <div className="col social-links">
                        <a href="facebook.com" className="link-item" target="blank" ><img src={iconFb} className="app-logo" alt="logo" /></a>
                        <a href="twitter.com" className="link-item" target="blank" ><img src={iconTwitter} className="app-logo" alt="logo" /></a>
                        <a href="instagram.com" className="link-item" target="blank" ><img src={iconIg} className="app-logo" alt="logo" /></a>
                        <a href="youtube.com" className="link-item" target="blank" ><img src={iconYoutube} className="app-logo" alt="logo" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );            
}

export default Footer