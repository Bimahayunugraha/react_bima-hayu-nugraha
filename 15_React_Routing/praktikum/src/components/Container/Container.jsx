import PropTypes from "prop-types";

import style from "./Container.module.css";

const Container = ({ children }) => {
	return <section className={style.container}>{children}</section>;
};

Container.propTypes = {
	children: PropTypes.node,
};

export default Container;
