import React from "react";
import { useNavigate } from "react-router-dom";

import imgNotFound from "../assets/img/png/not-found.png";

const NotFound = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};

	return (
		<div>
			<div className="text-white notFoundContent pt-5">
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
		</div>
	);
};

export default NotFound;
