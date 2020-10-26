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
                    <span> Customer Services</span>
                </div>
                <div className="footer__title mt-4">
                    <span>About Us</span>
                </div>
                <div className="footer__title mt-4">
                    <span> Buy on Honesty.pk</span>
                </div>
                <div className="footer__title mt-4">
                    <span>Sell on Honesty.pk</span>
                </div>
            </div>
            <div className="container">
                <hr className="horizontal__line" />


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
