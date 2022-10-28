/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../assets/img/svg/logo.svg";

const Footer = () => {
	return (
		<div>
			<footer id="footer" className="footer pt-5">
				<div className="footer-top">
					<div className="container">
						<div className="row gy-4">
							<div className="col-lg-5 col-md-12 footer-info">
								<Link to="/" className="logo d-flex align-items-center">
									<img src={footerLogo} alt="footer-logo" />
									<span>GoDev</span>
								</Link>
								<p>GoDev is a website that allows you to learn more about web programming especially in the front end developers.</p>
								<div className="social-links mt-3">
									<a href="https://api.whatsapp.com/send/?phone=087758524277&text&app_absent=0">
										<i className="bi bi-whatsapp"></i>
									</a>
									<a href="https://www.instagram.com/bimahyunugraha/">
										<i className="bi bi-instagram"></i>
									</a>
									<a href="https://t.me/BimaHayuNugraha">
										<i className="bi bi-telegram"></i>
									</a>
									<a href="https://github.com/Bimahayunugraha">
										<i className="bi bi-github"></i>
									</a>
								</div>
							</div>

							<div className="col-lg-2 col-6 footer-links">
								<h4>Useful Links</h4>
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About us</Link>
									</li>
									<li>
										<Link to="/events">Events</Link>
									</li>
									<li>
										<a href="#">Terms of service</a>
									</li>
									<li>
										<a href="#">Privacy policy</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-2 col-6 footer-links">
								<h4>Our Services</h4>
								<ul>
									<li>
										<a href="#">Web Design</a>
									</li>
									<li>
										<a href="#">Web Development</a>
									</li>
									<li>
										<a href="#">Management</a>
									</li>
									<li>
										<a href="#">Marketing</a>
									</li>
									<li>
										<a href="#">Graphic Design</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
								<h4>Contact Us</h4>
								<p>
									Magetan <br />
									Jawa Timur, 63396
									<br />
									<strong>Phone:</strong> +62 82 902 902 902
									<br />
									<strong>Email:</strong> godev@gmiail.com
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="copyright">
						<p className="fw-bold d-flex justify-content-center">
							Created with <i className="bi bi-heart-fill text-danger ms-2 created"></i>
						</p>
						&copy; Copyright
						<strong>
							<span> GoDev. </span>
						</strong>
						All Rights Reserved
					</div>
					<div className="credits">
						Designed by Bima Hayu Nugraha made with
						<a className="text-decoration-none ps-1" href="https://getbootstrap.com/">
							Bootstrap
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
