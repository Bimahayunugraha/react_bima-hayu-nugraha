import React, { useEffect, useState } from "react";

import logo from "../assets/img/svg/logo.svg";

const Navbar = () => {
	const [sticky, setSticky] = useState(false);

	const handleStickyNavbar = () => {
		if (window.scrollY > 100) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleStickyNavbar);
	});

	return (
		<header>
			<nav className={sticky ? `navbar navbar-expand-lg fixed-top nav-container active` : `navbar navbar-expand-lg fixed-top mb-3 nav-container`}>
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
								<a className="nav-link px-4" href="#hero">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link px-4" href="#contact">
									Contact
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link px-4" href="#about">
									About
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
