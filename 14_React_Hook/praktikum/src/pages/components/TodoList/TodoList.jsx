import ListItem from "../ListItem/ListItem";
import style from "./TodoList.module.css";

const TodoList = ({ todoLists, handleDeleteTodo, handleCheckTodo }) => {
	return (
		<div className="pt-2">
			{todoLists.map((list) => (
				<div key={list.id}>
					<div className="d-flex justify-content-between align-items-center py-1 border-bottom">
						<div className="form-check">
							<input
								className={`form-check-input ${style.checkbox}`}
								type="checkbox"
								onChange={() => handleCheckTodo(list.id)}
								defaultChecked={list.completed}
							/>
							<label className={list.completed ? style.checkedTodo : ""}>
								<ListItem item={list} />
							</label>
						</div>
						<button
							className={`rounded-circle text-dark fw-semibold ${style.buttonDelete}`}
							onClick={() => {
								if (window.confirm(`Apakah Anda yakin ingin menghapus daftar pekerjaan dengan judul ${list.title} ?`)) handleDeleteTodo(list.id);
							}}>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default TodoList;
