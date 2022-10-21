import React, { useEffect, useState } from "react";

const BackToTop = () => {
	const [toTop, setToTop] = useState(false);

	const handleToTop = () => {
		if (window.scrollY > 200) {
			setToTop(true);
		} else {
			setToTop(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleToTop);
	});
	return (
		<div>
			<a
				href="#hero"
				className={
					toTop ? `back-to-top d-flex align-items-center justify-content-center active` : `back-to-top d-flex align-items-center justify-content-center`
				}>
				<i className="bi bi-arrow-up-short"></i>
			</a>
		</div>
	);
};

export default BackToTop;
