import React from 'react';
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__socialLinks">
                <div className="footer__facebookIcon">
                    <a href="https://www.facebook.com/benget.napitupulu/" target="_blank"><FacebookIcon/></a>
                </div>
                <div className="footer__instagramIcon">
                   <a href="https://www.instagram.com/anggiatbenget.js/" target="_blank"><InstagramIcon/></a>
                </div>
                <div className="footer__githubIcon">
                    <a href="https://github.com/bengbengku" target="_blank"><GitHubIcon/></a>
                </div>
            </div>
            <div className="footer__copyright">
                <p>&copy; Developed by - Anggiat Benget Napitupulu<span>🚀</span> | Data Sebaran Covid-19</p>
            </div>
        </div>
    )
}

export default Footer
