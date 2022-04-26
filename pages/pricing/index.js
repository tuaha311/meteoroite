import React, { useState } from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import Loading from '../components/Loading'
import NavBar from '../components/NavBar'
import PricingPlans from '../components/PricingPlans'

const Pricing = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 400);
    return (
        <>
            {loading ? <Loading /> : null}
            <NavBar color={"white"} />
            <BreadCrumbs title={"Pricing Plans"} img={"pricing.jpg"} />
            <PricingPlans />
            <Footer />
            <Copyright />
            <GoToTop />
        </>
    )
}

export default Pricing