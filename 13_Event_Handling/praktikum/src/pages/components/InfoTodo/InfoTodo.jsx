import style from "./InfoTodo.module.css";

const InfoTotalTodo = ({ todosLength, deleteAllTodo, totalCompletedCount, totalUncompletedCount }) => {
	return (
		<div className="d-flex justify-content-between align-items-center pt-4 pb-3">
			<div className={`fw-semibold ${style.infoTotal}`}>{`Total Todo = ${todosLength}`}</div>
			<div className={`fw-semibold ${style.infoTotal}`}>{`Total Completed Todo = ${totalCompletedCount}`}</div>
			<div className={`fw-semibold ${style.infoTotal}`}>{`Total Uncompleted Todo = ${totalUncompletedCount}`}</div>
			<button
				onClick={() => {
					if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) deleteAllTodo();
				}}
				className={`btn text-danger ${style.deleteAllBtn}`}>
				Delete All Todo
			</button>
		</div>
	);
};

export default InfoTotalTodo;
