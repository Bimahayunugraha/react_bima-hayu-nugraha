import style from "./Loading.module.css";

const Loading = () => {
	return (
		<div className={`pt-2 ${style.container}`}>
			<div className={style.loader} />
		</div>
	);
};

export default Loading;
