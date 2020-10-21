import React from 'react'
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
    return (
        <div className="footer mt-4">
            <div className="footer__row">

            
            <div className="footer__title mt-4">
                Customer Services
            </div>
            <div className="footer__title mt-4">
                About Us
            </div>
            <div className="footer__title mt-4">
                Buy on Honesty.pk
            </div>
            <div className="footer__title mt-4">
                Sell on Honesty.pk
            </div>
            </div>
            <div className="container">
            <hr className="horizontal__line"/>
            
            
            <div className="footerlink__social">
                <span>Follow Us:</span>
                <FacebookIcon />
                <TwitterIcon />
                <YouTubeIcon />
                <InstagramIcon />
            </div>
            </div>
        </div>
    )
}

export default Footer
