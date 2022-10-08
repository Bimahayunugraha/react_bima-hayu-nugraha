import style from "./Header.module.css";

const HeaderSidebar = () => {
	return (
		<>
			<header className={`navbar flex-md-nowrap px-3 justify-content-end ${style.toggleNavbar}`}>
				<button
					className="navbar-toggler d-md-none position-absolute collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#sidebarMenu"
					aria-controls="sidebarMenu"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</header>
			;
		</>
	);
};

export default HeaderSidebar;
