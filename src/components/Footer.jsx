import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/icons/logo.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-main">
                    <div className="company-info">
                        <img src={logo} alt="" className="footer-logo" />
                        <p className="company-desc">Company description here</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="">Link</a></li>
                                <li><a href="">Link</a></li>
                            </ul>
                        </div>

                        <div className="link-group">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="">Link</a></li>
                                <li><a href="">Link</a></li>
                                <li><a href="">Link</a></li>
                                <li><a href="">Link</a></li>
                                <li><a href="">Link</a></li>
                            </ul>
                        </div>

                        <div className='link-group'>
                            <h4>Contact us</h4>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="fas fa-phone icon"></i>
                                    <span>+7 777 777 77 77</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-envelope icon"></i>
                                    <span>info@company.kz</span>
                                </div>
                                <div className="address">
                                    <i className="fas fa-location-dot icon"></i>
                                    <p>Address of the company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>© {currentYear} Company Name. All rights reserved.</p>

                    <div className="social-links">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram social-icon"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook social-icon"></i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube social-icon"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter social-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer