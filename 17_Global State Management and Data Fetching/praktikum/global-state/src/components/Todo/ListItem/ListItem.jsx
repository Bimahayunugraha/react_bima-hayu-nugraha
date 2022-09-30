import style from "./ListItem.module.css";
const LisItem = ({ item, handleDeleteTodo, handleCheckTodo }) => {
	return (
		<div>
			<div className="d-flex justify-content-between align-items-center py-1 border-bottom">
				<div className="form-check">
					<input
						className={`form-check-input ${style.checkbox}`}
						type="checkbox"
						onChange={() => {
							handleCheckTodo(item.id);
						}}
						defaultChecked={item.completed}
					/>
					<label className={item.completed ? style.checkedTodo : style.item}>{item.title}</label>
				</div>
				<button
					className={`rounded-circle text-dark fw-semibold ${style.buttonDelete}`}
					onClick={() => {
						if (window.confirm(`Apakah Anda yakin ingin menghapus daftar pekerjaan dengan judul ${item.title} ?`)) handleDeleteTodo(item.id);
					}}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default LisItem;
