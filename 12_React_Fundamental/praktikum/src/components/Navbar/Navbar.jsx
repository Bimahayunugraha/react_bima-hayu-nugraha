import style from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<h1 className={style.navTitle}>To Do App</h1>
		</nav>
	);
};

export default Navbar;
