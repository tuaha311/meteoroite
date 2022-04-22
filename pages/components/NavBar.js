import React from 'react'
import Image from 'next/image'

import '../../styles/responsive.module.css'
import '../../styles/fontawesome.min.module.css'



const NavBar = () => {
	return (
		<div className="navbar-fixed-top navbar-area navbar-fixed-top">
			<div className="techmax-responsive-nav index-navber-responsive navbar-fixed-top">
				<div className="container">
					<div className="techmax-responsive-menu">
						<div className="logo">
							<a href="index.html">
								<Image src="/logo-black.png" className="white-logo" alt="logo" layout='fill' />
								<Image src="/logo-black.png" className="black-logo" alt="logo" layout='fill' />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="techmax-nav index-navber">
				<div className="container">
					<nav className="navbar navbar-expand-md navbar-light">
						<a className="navbar-brand" href="index.html">
							<img src="images/logo-black.png" className="white-logo" alt="logo" />
							{/* <img src="/images/logo-black.png" className="black-logo" alt="logo"/> */}
						</a>
						<div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a href="index.html" className="nav-link">Home</a>
								</li>
								<li className="nav-item">
									<a href="about.html" className="nav-link">About Us</a>
								</li>
								<li className="nav-item">
									<a href="#" className="nav-link">Services <i className="fas fa-chevron-down"></i></a>
									<ul className="dropdown-menu">
										<li className="nav-item">
											<a href="services.html" className="nav-link">Services</a>
										</li>
										<li className="nav-item">
											<a href="single-services.html" className="nav-link">Services Details</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a href="#" className="nav-link">Pages <i className="fas fa-chevron-down"></i></a>
									<ul className="dropdown-menu">
										<li className="nav-item">
											<a href="projects.html" className="nav-link">Projects</a>
										</li>
										<li className="nav-item">
											<a href="single-projects.html" className="nav-link">Projects Details</a>
										</li>
										<li className="nav-item">
											<a href="pricing.html" className="nav-link">Pricing</a>
										</li>
										<li className="nav-item">
											<a href="faq.html" className="nav-link">FAQ</a>
										</li>
										<li className="nav-item">
											<a href="coming-soon.html" className="nav-link">Coming Soon</a>
										</li>
										<li className="nav-item">
											<a href="terms-condition.html" className="nav-link">Terms & Conditions</a>
										</li>
										<li className="nav-item">
											<a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a href="#" className="nav-link">Blog <i className="fas fa-chevron-down"></i></a>
									<ul className="dropdown-menu">
										<li className="nav-item">
											<a href="blog-1.html" className="nav-link">Blog Grid</a>
										</li>
										<li className="nav-item">
											<a href="single-blog.html" className="nav-link">Blog Details</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a href="contact.html" className="nav-link">Contact</a>
								</li>
							</ul>
							<div className="other-option">
								<a className="default-btn nav-btn-1" href="#0">Log In <span></span></a>
								<a className="default-btn" href="#0">Get Quotes <span></span></a>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default NavBar
