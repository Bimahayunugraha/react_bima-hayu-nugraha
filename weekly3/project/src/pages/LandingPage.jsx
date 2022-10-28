import React from "react";

import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";

const LandingPage = () => {
	return (
		<div>
			<section id="hero" className="hero">
				<Hero />
			</section>
			<section id="about" className="py-5 section-content">
				<AboutUs />
			</section>
			<section id="contact" className="py-5 bg-contact section-content">
				<ContactUs />
			</section>
		</div>
	);
};

export default LandingPage;
