import style from "./InfoItem.module.css";

const InfoItem = ({ todos, handleDeleteAllTodo, totalCompletedCount, totalUncompletedCount, disabled }) => {
	return (
		<div className="d-flex justify-content-between align-items-center pt-4 pb-3">
			<div className={`fw-semibold ${style.infoTotal}`}>{`Total Todo = ${todos.length}`}</div>
			<div className={`fw-semibold ${style.infoTotal}`}>{`Total Completed Todo = ${totalCompletedCount}`}</div>
			<div className={`fw-semibold ${style.infoTotal}`}>{`Total Uncompleted Todo = ${totalUncompletedCount}`}</div>
			<button
				onClick={() => {
					if (window.confirm("Apakah Anda yakin ingin menghapus semua daftar pekerjaan Anda?")) handleDeleteAllTodo();
				}}
				className={`btn text-danger ${style.deleteAllBtn}`}
				disabled={disabled}>
				Delete All Todo
			</button>
		</div>
	);
};

export default InfoItem;
