import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/img/svg/logo.svg";
import { scrolling } from "../store/features/scrollSlice";

const Navbar = () => {
	const [url, setUrl] = useState(null);

	const scroll = useSelector((state) => state.scroll);
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				dispatch(scrolling(true));
			} else {
				dispatch(scrolling(false));
			}
		});
	}, [dispatch]);

	useEffect(() => {
		setUrl(location.pathname);
	}, [location]);

	return (
		<header>
			<nav className={scroll ? `navbar navbar-expand-lg fixed-top nav-container active` : `navbar navbar-expand-lg fixed-top mb-3 nav-container`}>
				<div className="container mx-auto">
					<div className="nav-logo">
						<a className="navbar-brand d-flex align-items-center justify-content-center" href="#home">
							<img src={logo} alt="logo" />
							<h3 className="my-auto ps-3">
								<span>GoDev</span>
							</h3>
						</a>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse nav-list-container" id="navbarNavDropdown">
						<ul className="navbar-nav nav-list ms-auto">
							<li className="nav-item">
								<Link to="/" className={`nav-link px-4 ${url === "/" ? "active-link" : ""}`}>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link px-4" href="#contact">
									Contact
								</a>
							</li>
							<li className="nav-item">
								<Link to="/about" className={`nav-link px-4 ${url === "/about" ? "active-link" : ""}`}>
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/events" className={`nav-link px-4 ${url === "/events" ? "active-link" : ""}`}>
									Event
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
