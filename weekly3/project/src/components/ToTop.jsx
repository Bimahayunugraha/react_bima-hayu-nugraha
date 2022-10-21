import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scrolling } from "../store/features/scrollSlice";

const ToTop = () => {
	const scroll = useSelector((state) => state.scroll);
	const dispatch = useDispatch();

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 200) {
				dispatch(scrolling(true));
			} else {
				dispatch(scrolling(false));
			}
		});
	}, [dispatch]);

	return (
		<div>
			<a
				href="#hero"
				className={
					scroll ? `back-to-top d-flex align-items-center justify-content-center active` : `back-to-top d-flex align-items-center justify-content-center`
				}>
				<i className="bi bi-arrow-up-short"></i>
			</a>
		</div>
	);
};

export default ToTop;
