import React from 'react'
import Image from 'next/image'

const HomeComponent = () => {
  return (
    <div className="home-area">
		<div className="d-table">
			<div className="d-table-cell">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="main-banner-content">
								<h1>Encourage innovation with trusted <span className="color-text">Technology Solutions</span></h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.</p>
								<div className="banner-btn">
									<a href="about.html" className="default-btn-one">
                                        Learn More
                                        <span></span>
                                    </a>
									<a className="default-btn" href="contact.html">
                                        Contact Us 
                                        <span></span>
                                    </a>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="banner-image">
								<Image src="/images/home-font.png" alt="image" width='750w' height="640w"/>
							</div>
                        </div>
					</div>
				</div>
			</div>
		</div>
		<div className="grey-cr"></div>
	</div>


  )
}

export default HomeComponent