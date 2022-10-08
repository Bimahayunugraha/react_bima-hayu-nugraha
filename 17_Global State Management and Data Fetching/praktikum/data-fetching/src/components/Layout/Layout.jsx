import { Outlet } from "react-router-dom";

import Sidebar from "../Todo/Navbar/Navbar";
import style from "./Layout.module.css";

const sidebarItems = [
	{
		title: "Home",
		route: "/",
		icon: <i className="far fa-home-alt me-2" width="16" height="16"></i>,
	},
	{
		title: "About",
		route: "/about/about-app",
		icon: <i className="far fa-info-circle me-2" width="16" height="16"></i>,
	},
];

const Layout = () => {
	return (
		<div>
			<Sidebar sidebarItems={sidebarItems} />
			<section className={style.container}>
				<Outlet />
			</section>
		</div>
	);
};

export default Layout;
