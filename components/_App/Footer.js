import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer-top-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <Link href="/">
                                    <a>
                                        <img src="/images/logo2.png" alt="Image" />
                                    </a>
                                </Link>

                                <p>Lorem ipsum dolor sitamet,cons adipiscing elit, sed do eiusmod te incididunt ut labore et dolore Lorem ipsum dolor sitamet,cons adipiscing dolore Lorem ipsum dolor.</p>

                                <div className="social-area">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="bx bxl-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i className="bx bxl-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank"><i className="bx bxl-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank"><i className="bx bxl-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="bx bxl-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>Contact Us</h3>

                                <ul>
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <span>Hotline:</span> 
                                        <a href="tel:+263 719 745 452">
                                            Phone: +263 719 745 452
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <span>Email:</span> 
                                        <a href="mailto:info@ecgc.co.zw">
                                            info@ecgc.co.zw
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="flaticon-maps-and-flags"></i>
                                        <span>Address:</span> 
                                        6 Earls Rd, Alexandra Park, Harare, Zimbabwe
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Service Links</h3>

                                <ul>
                                    <li>
                                        <Link href="/insurance-details">
                                            <a>Export and Domestic Insurance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/car-insurance">
                                            <a>Bonds and Financial Guarantees</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/home-insurance">
                                            <a>General Insurance</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Newsletter</h3>

                                <p className="newsletter-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

                                <div className="subscribe-wrap">
                                    <form className="newsletter-form">
                                        <input type="email" className="form-control" placeholder="Enter Your Email" name="email" required />
                                        <button className="default-btn" type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
	
            <div className="footer-bottom-area footer-bottom-electronics-area">
                <div className="container">
                    <div className="copy-right">
                        <p>Copyright &copy;{currentYear} Flexa Designed By <a href="https://envytheme.com/" target="blank">EnvyTheme</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;