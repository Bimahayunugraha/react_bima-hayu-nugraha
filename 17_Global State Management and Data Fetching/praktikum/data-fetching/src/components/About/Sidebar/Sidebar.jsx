import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = ({ sidebarItems }) => {
	const [url, setUrl] = useState([]);
	const location = useLocation();

	useEffect(() => {
		setUrl(location.pathname);
	}, [location]);

	return (
		<>
			<button
				className={`navbar-toggler position-absolute d-md-none collapsed ${style.customNavbarToggler}`}
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#sidebarMenu"
				aria-controls="sidebarMenu"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon {style.navbarToggler"></span>
			</button>
			<nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-transparent sidebar collapse">
				<div className={`position-sticky pt-3 ${style.menu}`}>
					<ul className="nav flex-column">
						{sidebarItems.map((item, index) => (
							<li className="nav-item" key={index}>
								<Link
									className={`nav-link d-flex align-items-center gap-3 mb-2 fw-semibold ${url === item.route ? style.active : style.link}`}
									aria-current="page"
									to={item.route}>
									<span className={style.icon}>{item.icon}</span>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Sidebar;
