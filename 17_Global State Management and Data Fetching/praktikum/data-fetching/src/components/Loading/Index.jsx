import React from "react";
import style from "./Loading.module.css";

function Loading() {
	return (
		<div className={`pt-2 ${style.container}`}>
			<div className={style.loader} />
		</div>
	);
}

export default Loading;
