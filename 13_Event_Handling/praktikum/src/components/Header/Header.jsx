import style from "./Header.module.css";

const Header = () => {
	return (
		<div className="d-flex justify-content-center pt-4">
			<h1 className={`fw-bold display-3 ${style.textHeader}`}>todos</h1>
		</div>
	);
};

export default Header;
