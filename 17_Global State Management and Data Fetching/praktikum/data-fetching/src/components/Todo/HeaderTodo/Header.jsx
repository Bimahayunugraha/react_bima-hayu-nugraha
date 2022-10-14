import style from "./Header.module.css";

const Header = () => {
	return (
		<header className="d-flex justify-content-center pt-4">
			<h1 className={`display-3 ${style.textHeader}`}>todos</h1>
		</header>
	);
};

export default Header;
