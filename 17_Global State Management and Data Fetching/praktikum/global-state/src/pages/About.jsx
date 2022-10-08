import { Outlet } from "react-router-dom";
import Header from "../components/About/Header/Header";
import Sidebar from "../components/About/Sidebar/Sidebar";

const About = () => {
	const sidebarItems = [
		{
			title: "Home",
			route: "/",
			icon: <i className="far fa-home-alt" width="16" height="16"></i>,
		},
		{
			title: "About App",
			route: "/about/about-app",
			icon: <i className="far fa-info-circle" width="16" height="16"></i>,
		},
		{
			title: "About Author",
			route: "/about/about-author",
			icon: <i className="fas fa-user" width="16" height="16"></i>,
		},
	];
	return (
		<>
			<Header />
			<div className="container-fluid">
				<div className="row">
					<Sidebar sidebarItems={sidebarItems} />
					<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
						<Outlet />
					</main>
				</div>
			</div>
		</>
	);
};

export default About;
