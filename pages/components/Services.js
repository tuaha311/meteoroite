import React from 'react'
import '../../styles/pe-icon-7-stroke.module.css'


const Services = () => {
  return (
    <section className="services-section pt-70 pb-100">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6">
                <div className="single-services-item">
                    <div className="services-icon">
                        <i className="pe-7s-display1"></i>
                    </div>
                    <h3>IT Solution</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                    <div className="services-btn-link">
                        <a href="#0" className="services-link">Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single-services-item">
                    <div className="services-icon">
                        <i className="pe-7s-display1"></i>
                    </div>
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                    <div className="services-btn-link">
                        <a href="#0" className="services-link">Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single-services-item">
                    <div className="services-icon">
                        <i className="pe-7s-display1"></i>
                    </div>
                    <h3>Networking Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                    <div className="services-btn-link">
                        <a href="#0" className="services-link">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Services