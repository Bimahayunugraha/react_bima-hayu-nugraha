import React from "react";
import AboutUs from "../components/AboutUs";
import BackToTop from "../components/BackToTop";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<main>
				<section id="hero" className="hero">
					<Hero />
				</section>
				<section id="about" className="py-5 section-content">
					<AboutUs />
				</section>
				<section id="contact" className="py-5 section-content">
					<ContactUs />
				</section>
			</main>
			<Footer />

			<BackToTop />
		</>
	);
};

export default LandingPage;
