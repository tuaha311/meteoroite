import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel';

const Testimonials = () => {
    // const [display, setDisplay] = useState(false)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setDisplay(true)
    //     }, 2000);
    // })

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (

        <section className="testimonial-section bg-grey section-padding">
            <div className="container">
                <div className="section-title">
                    <h2>Our Client Say</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="testimonial-slider owl-carousel owl-theme">
                            <Carousel breakPoints={breakPoints}>
                                {/* <!-- testimonials item --> */}

                                <div className="single-testimonial">
                                    <div className="rating-box">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>
                                    <div className="avatar">
                                        <img src="images/client/testimonial-1.jpg" alt="testimonial images" />
                                    </div>
                                    <div className="testimonial-bio">
                                        <div className="bio-info">
                                            <h3>Stanley Tate</h3>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- testimonials item --> */}
                                <div className="single-testimonial">
                                    <div className="rating-box">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>
                                    <div className="avatar">
                                        <img src="images/client/testimonial-2.jpg" alt="testimonial images" />
                                    </div>
                                    <div className="testimonial-bio">
                                        <div className="bio-info">
                                            <h3>Lana Shelton</h3>
                                            <span>Architect</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- testimonials item --> */}
                                <div className="single-testimonial">
                                    <div className="rating-box">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>
                                    <div className="avatar">
                                        <img src="images/client/testimonial-3.jpg" alt="testimonial images" />
                                    </div>
                                    <div className="testimonial-bio">
                                        <div className="bio-info">
                                            <h3>Mario Houston</h3>
                                            <span>Social Worker</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- testimonials item --> */}
                                <div className="single-testimonial">
                                    <div className="rating-box">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>
                                    <div className="avatar">
                                        <img src="images/client/testimonial-3.jpg" alt="testimonial images" />
                                    </div>
                                    <div className="testimonial-bio">
                                        <div className="bio-info">
                                            <h3>Mario Houston</h3>
                                            <span>Social Worker</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- testimonials item --> */}
                                <div className="single-testimonial">
                                    <div className="rating-box">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>
                                    <div className="avatar">
                                        <img src="images/client/testimonial-1.jpg" alt="testimonial images" />
                                    </div>
                                    <div className="testimonial-bio">
                                        <div className="bio-info">
                                            <h3>Stanley Tate</h3>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials