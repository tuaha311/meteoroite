import React from 'react'
import Image from 'next/image'


const Overview = () => {
  return (
    <div>
      <section className="overview-section bg-grey section-padding">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-6">
					<div className="overview-content">
						<h2>Creating Website Solutions</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<ul className="features-list">
							<li> <span className="active">E-Commerce Development</span></li>
							<li> <span>Web Design</span></li>
							<li> <span>WordPress Development</span></li>
							<li> <span>Network Monitoring</span></li>
							<li> <span>Page Speed Optimization</span></li>
							<li> <span>Shopify Development</span></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="overview-image-2">
						<Image src="/images/choose-1.png" alt="image" width='750w' height="640w"/>
					</div>
				</div>
			</div>
		</div>
	</section>

  {/* Overview Section */}

  <section className="overview-section section-padding">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-6">
					<div className="overview-image">
						<Image src="/images/choose-2.png" alt="image" width='750w' height="640w"/>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="overview-content">
						<h2>Tech Soul for your Business</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<ul className="features-list">
							<li> <span className="active">Discovery & Strategy</span></li>
							<li> <span>UX/UI Design</span></li>
							<li> <span>iOS apps (Swift)</span></li>
							<li> <span>Android apps (Java)</span></li>
							<li> <span>Managed IT Service</span></li>
							<li> <span>Cloud Services</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>


    </div>
  )
}

export default Overview
