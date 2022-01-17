import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutUsContent = () => {
    return (
        <div className="about-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<span>About Us</span>
							<h2>We have been Thriving Since 2000 In The Area</h2>

							<p>Incorporated in 1999 and commencing operations in 2000, Export Credit Guarantee Corporation of Zimbabwe (PVT) LTD (ECGC) is a wholly owned subsidiary of the Reserve Bank of Zimbabwe and a duly registered short-term insurer. ECGC is regulated and supervised by the Commissioner of Insurance in terms of the Insurance Act and has complied with capital requirements as set out by the Insurance and Pensions Commission (IPEC). Over the years ECGC has played a pivotal role in Zimbabwe’s economy through offering financial solutions and expertise that create an enabling environment for business growth and expansion into new markets in both the domestic and international arena.
								</p>

							<div className="about-list">
								<ul>
									<li>
										<i className="flaticon-checked"></i>
										Save Money
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Fast Application
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Flexible Insurance
									</li>
									<li>
										<i className="flaticon-checked"></i>
										No Brokers, No Upselling
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Investment Planning
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Professional Advisor
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="about-img">
							<ScrollAnimation animateIn="fadeInRight" delay={50} animateOnce={true}>
								<img src="/images/about-img.png" alt="Image" />
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUsContent;