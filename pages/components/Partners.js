import React from 'react'
import Image from 'next/image'
import Carousel from 'react-elastic-carousel';
const Partners = () => {
    return (
        <div className="partner-area bg-grey">
            <div className="container">
                <div id="partner-carousel" className="partner-carousel owl-carousel owl-theme owl-loaded">
                    <Carousel>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-1.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-2.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-3.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-4.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-5.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-6.jpg" alt="partner-image" />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-7.jpg" alt="partner-image" layout='fill' />
                            </a>
                        </div>
                        <div className="partner-slide-item">
                            <a href="#0">
                                <img src="/images/partner-logo/client-8.jpg" alt="partner-image" layout='fill' />
                            </a>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>

    )
}

export default Partners