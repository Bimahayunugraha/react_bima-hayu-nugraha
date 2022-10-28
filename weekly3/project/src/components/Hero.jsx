import React from "react";

import heroImg from "../assets/img/png/hero-img.png";

const Hero = () => {
	return (
		<div className="hero-container d-flex align-items-center">
			<div className="container mx-auto hero-content">
				<div className="row">
					<div className="col-lg-6 d-flex flex-column justify-content-center">
						<h1>We offer modern solutions for growing your business</h1>
						<h2>We are a team of developers who build a front-end website with a bootstrap framework</h2>
						<div>
							<div className="text-center text-lg-start">
								<a href="#hero" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
									<span>Get Started</span>
									<i className="bi bi-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-6 hero-img">
						<img src={heroImg} className="img-fluid" alt="hero-img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
