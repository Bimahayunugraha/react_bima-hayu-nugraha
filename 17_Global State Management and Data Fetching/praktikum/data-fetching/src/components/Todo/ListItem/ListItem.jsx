import { useDispatch } from "react-redux";
import { deleteTodoById, updateTodo } from "../../../store/features/todosSlice";
import style from "./ListItem.module.css";

const LisItem = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<div>
			<div className="d-flex justify-content-between align-items-center py-1 border-bottom">
				<div className="form-check ms-1">
					<input
						className={`form-check-input ${style.checkbox}`}
						type="checkbox"
						onChange={() => {
							dispatch(updateTodo({ ...item, completed: !item.completed }));
						}}
						defaultChecked={item.completed}
					/>
					<label className={item.completed ? style.checkedTodo : style.item}>{item.title}</label>
				</div>
				<button
					className={`rounded-circle text-dark fw-semibold ${style.buttonDelete}`}
					onClick={() => {
						if (window.confirm(`Apakah Anda yakin ingin menghapus daftar pekerjaan dengan judul ${item.title} ?`)) dispatch(deleteTodoById(item.id));
					}}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default LisItem;
