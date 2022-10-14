import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../../store/features/todosSlice";

import EmptyTodo from "../Empty/Empty";
import ListItem from "../ListItem/ListItem";
import Loading from "../../Loading/Index";
import style from "./TodoList.module.css";

const TodoList = () => {
	const todos = useSelector((state) => state.todos.data);
	const componentStatus = useSelector((state) => state.todos.componentStatus);
	const fetchStatus = useSelector((state) => state.todos.fetchStatus);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodos());
	}, [componentStatus, dispatch]);

	return (
		<div>
			{fetchStatus === "succeeded" ? (
				<div>
					{todos.length > 0 ? (
						<div className={`pt-2 ${style.todoListContainer}`}>
							<div className={style.todosContainer}>
								{todos
									.map((todo) => {
										return <ListItem key={todo.id} item={todo} />;
									})
									.reverse()}
							</div>
						</div>
					) : (
						<EmptyTodo />
					)}
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default TodoList;
