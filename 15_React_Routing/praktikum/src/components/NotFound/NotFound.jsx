import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import style from "./NotFound.module.css";
import imgNotFound from "../assets/img/not-found.png";

const NotFound = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};
	useEffect(() => {
		document.title = "Not Found";
	});
	return (
		<div className={`text-white ${style.notFoundContent}`}>
			<div className="d-flex flex-wrap">
				<div className="m-auto text-center">
					<div>
						<img src={imgNotFound} alt="ImageNotFound" />
					</div>
					<button className="btn btn-primary rounded-lg" onClick={goHome}>
						Back to home
					</button>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
