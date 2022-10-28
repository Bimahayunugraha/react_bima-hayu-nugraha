import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ToTop from "./ToTop";

const Layout = () => {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<ToTop />
			<Footer />
		</div>
	);
};

export default Layout;
