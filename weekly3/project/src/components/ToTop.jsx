import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scrolling } from "../store/features/scrollSlice";

const ToTop = () => {
	const scroll = useSelector((state) => state.scroll);
	const dispatch = useDispatch();

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleScrollVisibility = () => {
		if (window.scrollY > 200) {
			dispatch(scrolling(true));
		} else {
			dispatch(scrolling(false));
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollVisibility);

		return () => {
			window.removeEventListener("scroll", handleScrollVisibility);
		};
	});

	return (
		<div>
			<button
				onClick={handleScrollToTop}
				className={
					scroll
						? `back-to-top d-flex align-items-center justify-content-center border border-0 active`
						: `back-to-top d-flex align-items-center justify-content-center border border-0`
				}>
				<i className="bi bi-arrow-up-short"></i>
			</button>
		</div>
	);
};

export default ToTop;
