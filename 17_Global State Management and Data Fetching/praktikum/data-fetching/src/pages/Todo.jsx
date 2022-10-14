import { useEffect } from "react";

import Header from "../components/Todo/HeaderTodo/Header";
import InfoTodo from "../components/Todo/InfoTodo/InfoTodo";
import TodoInput from "../components/Todo/TodoInput/TodoInput";
import TodoList from "../components/Todo/TodoList/TodoList";

const Todo = () => {
	useEffect(() => {
		document.title = "Todo Home";
	});

	return (
		<>
			<Header />
			<TodoInput />
			<InfoTodo />
			<TodoList />
		</>
	);
};

export default Todo;
