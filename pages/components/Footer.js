import React from 'react'

const Footer = () => {
    return (
        <section className="footer-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="footer-heading">
                                <h3>About Us</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur laboris.</p>
                            <ul className="footer-social">
                                <li>
                                    <a href="#"> <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fab fa-pinterest"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="footer-heading">
                                <h3>Our Services</h3>
                            </div>
                            <ul className="footer-quick-links">
                                <li> <a href="#">IT Solution</a></li>
                                <li> <a href="#">Web Development</a></li>
                                <li> <a href="#">Networking Services</a></li>
                                <li> <a href="#">SEO Optimization</a></li>
                                <li> <a href="#">App Optimization</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="footer-heading">
                                <h3>Quick Links</h3>
                            </div>
                            <ul className="footer-quick-links">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="projects.html">Case Study</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="terms-condition.html">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="footer-heading">
                                <h3>Contact Information</h3>
                            </div>
                            <div className="footer-info-contact">
                                <span><strong>Phone:</strong> <a href="tel:0802235678">+000 313 577 111</a></span>
                            </div>
                            <div className="footer-info-contact">
                                <span><strong>Email:</strong> <a href="http://barakahit.net/cdn-cgi/l/email-protection#afcbcac2c0efcad7cec2dfc3ca81ccc0c2"><span className="__cf_email__" data-cfemail="84e0e1e9ebc4e1fce5e9f4e8e1aae7ebe9">[email&#160;protected]</span></a></span>
                            </div>
                            <div className="footer-info-contact">
                                <span><strong>Address:</strong> 4035 Heavens, Los Angeles, California</span>
                            </div>
                            {/* Start Subscribe Area */}
                            <form className="newsletter-form">
                                <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required autoComplete="off" />
                                <button className="default-btn" type="submit">Subscribe <span></span></button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer