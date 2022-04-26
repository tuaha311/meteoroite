import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

// **Importing Styles
import '../styles/Home.module.css'
import '../styles/animate.min.module.css'
// import '../styles/bootstrap.min.module.css'
import '../styles/fontawesome.min.module.css'
import '../styles/Home.module.css'
import '../styles/meanmenu.module.css'
// import '../styles/owl.carousel.min.module.css'
import '../styles/pe-icon-7-stroke.module.css'
import '../styles/responsive.module.css'

//** Importing Components
import NavBar from '../pages/components/NavBar.js'
import Loading from '../pages/components/Loading.js'
import HomeComponent from './components/HomeComponent.js'
import Services from './components/Services'
import Overview from './components/Overview'
import Counter from './components/Counter'
import ExpertTeam from './components/ExpertTeam'
import Testimonials from './components/Testimonials'
import Hire from './components/Hire'
import Blogs from './components/Blogs'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
import GoToTop from './components/GoToTop'

export default function Home() {

	const [loading, setLoading] = useState(true)
	setTimeout(() => {
		setLoading(false)
	}, 1000);
	return (
		<>

			{loading ? <Loading /> : null}

			{/* NavigationBar Area */}

			<NavBar />
			{/* Home Area */}

			<HomeComponent />

			{/* Service Section */}

			<Services />

			{/* Overview Section */}

			<Overview />

			{/* Counter Section */}

			<Counter />

			{/* Team Section */}

			<ExpertTeam />

			{/* Testimonials */}

			<Testimonials />

			{/* Hire */}

			<Hire />

			{/* Blog Section */}

			<Blogs />

			{/* Partner Logo Section */}

			<Partners />

			{/* Footer Section */}
			<Footer />

			{/* Copyright */}

			<Copyright />

			{/* Go-to-Top Button */}

			<GoToTop />
		</>
	)
}
