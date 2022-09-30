import { useDispatch, useSelector } from "react-redux";
import { handleDeleteTodo, handleCheckTodo } from "../../../store/todoSlice";

import style from "./TodoList.module.css";
import EmptyTodo from "../Empty/Empty";
import ListItem from "../ListItem/ListItem";

const TodoList = () => {
	const todos = useSelector((state) => state.todo.todos);
	const dispatch = useDispatch();

	return (
		<div className={`pt-2 ${style.todoListContainer}`}>
			{todos.length > 0 ? (
				<div className={style.todosContainer}>
					{todos.map((todo) => (
						<div key={todo.id}>
							<ListItem
								item={todo}
								handleDeleteTodo={() => {
									dispatch(handleDeleteTodo(todo.id));
								}}
								handleCheckTodo={() => {
									dispatch(handleCheckTodo(todo.id));
								}}
							/>
						</div>
					))}
				</div>
			) : (
				<EmptyTodo />
			)}
		</div>
	);
};

export default TodoList;
