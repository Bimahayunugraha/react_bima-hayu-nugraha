import React from "react";

import aboutImage from "../assets/img/png/about-img.png";

const AboutUs = () => {
	return (
		<div className="about">
			<div className="container">
				<div className="row gx-0">
					<div className="col-lg-6 d-flex flex-column justify-content-center">
						<div className="content">
							<h3>About us</h3>
							<h2>GoDev is a website that allows you to learn more about web programming especially in the front end developers.</h2>
							<p>
								With GoDev you can create your own web applications with various web programming languages such React and JavaScript. For more information,
								click read more and have fun.
							</p>
							<div className="text-center text-lg-start">
								<a href="#hero" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
									<span>Read More</span>
									<i className="bi bi-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-6 d-flex align-items-center">
						<img src={aboutImage} className="img-fluid" alt="about-img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
