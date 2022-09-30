import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteAllTodo } from "../../../store/features/todoSlice";
import { disabledButton } from "../../../store/features/buttonSlice";

import style from "./InfoTodo.module.css";

const InfoTotalTodo = () => {
	const disableButton = useSelector((state) => state.button);
	const todos = useSelector((state) => state.todo.todos);
	const dispatch = useDispatch();

	const getTotalCompletedTodos = () => {
		const totalCounts = todos.reduce((total, num) => {
			return total + num.completed;
		}, 0);

		return totalCounts;
	};

	const getTotalUncompletedTodos = () => {
		const totalCounts = todos.reduce((total, num) => {
			return total + !num.completed;
		}, 0);

		return totalCounts;
	};

	useEffect(() => {
		if (todos.length > 0) {
			dispatch(disabledButton(false));
		} else {
			dispatch(disabledButton(true));
		}
	});

	return (
		<div>
			<div className="d-flex justify-content-between align-items-center pt-4 pb-3">
				<div className={`fw-semibold ${style.infoTotal}`}>{`Total Todo = ${todos.length}`}</div>
				<div className={`fw-semibold ${style.infoTotal}`}>{`Total Completed Todo = ${getTotalCompletedTodos()}`}</div>
				<div className={`fw-semibold ${style.infoTotal}`}>{`Total Uncompleted Todo = ${getTotalUncompletedTodos()}`}</div>
				<button
					onClick={() => {
						if (window.confirm("Apakah Anda yakin ingin menghapus semua daftar pekerjaan Anda?")) dispatch(handleDeleteAllTodo(todos));
					}}
					className={`btn text-danger ${style.deleteAllBtn}`}
					disabled={disableButton}>
					Delete All Todo
				</button>
			</div>
		</div>
	);
};

export default InfoTotalTodo;
