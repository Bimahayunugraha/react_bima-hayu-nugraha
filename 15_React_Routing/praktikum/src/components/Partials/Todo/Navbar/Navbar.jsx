import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";

const Sidebar = ({ sidebarItems }) => {
	const [url, setUrl] = useState(null);
	const location = useLocation();

	useEffect(() => {
		setUrl(location.pathname);
	}, [location]);

	return (
		<nav className="navbar bg-light" aria-label="Light offcanvas navbar">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbarLight"
					aria-controls="offcanvasNavbarLight">
					<span className="navbar-toggler-icon"></span>
				</button>
				<Link className={`navbar-brand fw-semibold ${style.navbarBrand}`} to="/">
					Todo App
				</Link>
				<div className={`offcanvas offcanvas-start ${style.offCanvas}`} id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
					<div className="offcanvas-header">
						<button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
							{sidebarItems.map((item, index) => (
								<li className="nav-item" key={index}>
									<Link className={`nav-link px-3 rounded ${url === item.route ? style.active : ""}`} aria-current="page" to={item.route}>
										{item.icon} <span>{item.title}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
