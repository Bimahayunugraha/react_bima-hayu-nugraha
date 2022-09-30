import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteAllTodo } from "../../../store/todoSlice";

import InfoItem from "../InfoItem/InfoItem";

const InfoTotalTodo = () => {
	const todos = useSelector((state) => state.todo.todos);
	const dispatch = useDispatch();

	const [disabled, setDisabled] = useState(true);

	// Fitur Tambahan: Total todo yang sudah selesai
	const getTotalCompletedTodos = () => {
		const totalCounts = todos.reduce((total, num) => {
			return total + num.completed;
		}, 0);

		return totalCounts;
	};

	// Fitur Tambahan: Total todo yang belum selesai
	const getTotalUncompletedTodos = () => {
		const totalCounts = todos.reduce((total, num) => {
			return total + !num.completed;
		}, 0);

		return totalCounts;
	};

	useEffect(() => {
		if (todos.length > 0) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [todos]);

	return (
		<div>
			<InfoItem
				todos={todos}
				handleDeleteAllTodo={() => {
					dispatch(handleDeleteAllTodo(todos));
				}}
				totalCompletedCount={getTotalCompletedTodos()}
				totalUncompletedCount={getTotalUncompletedTodos()}
				disabled={disabled}
			/>
		</div>
	);
};

export default InfoTotalTodo;
