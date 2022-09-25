import style from "./FormInfo.module.css";

const FormInfo = () => {
	return (
		<div className={`text-center w-100 h-100 rounded px-3 pt-3 ${style.bgImage}`}>
			<div className={style.title}>
				<h2 className="mb-3 text-white bg-dark bg-opacity-50 rounded py-2">Pendaftaran Peserta Coding Bootcamp</h2>
			</div>
		</div>
	);
};

export default FormInfo;
