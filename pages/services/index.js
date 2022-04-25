import React, { useState } from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'

//**importing Components
import Loading from '../components/Loading'
import NavBar from '../components/NavBar'
import Overview from '../components/Overview'
import Services from '../components/Services'

const ServicesPage = () => {

    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000);


    return (<>
        {loading ? <Loading /> : null}
        <NavBar color={"white"} />
        <BreadCrumbs title={"Services"} />
        <Services />
        <section className="services-section pt-0 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="services-icon">
                                <i className="pe-7s-display1"></i>
                            </div>
                            <h3>SEO Optimization</h3>
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
                            <h3>App Optimization</h3>
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
                            <h3>Data Recovery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                            <div className="services-btn-link">
                                <a href="#0" className="services-link">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Overview />
        <Footer />
        <Copyright />
    </>)
}

export default ServicesPage