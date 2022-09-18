import { useState } from "react";
import TodoList from "../components/TodoList/TodoList";

import TodoData from "../../TodoData";
import TodoInput from "../components/TodoInput/TodoInput";
import EmptyTodo from "../components/EmptyTodo/EmptyTodo";
import InfoTodo from "../components/InfoTodo/InfoTodo";

const Todo = () => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState(TodoData);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!value) {
			alert("Input tidak boleh kosong!");
			return;
		}

		const addTodo = [...todos, { id: todos.length + 1, title: value, completed: false }];

		setTodos(addTodo);
		setValue("");
	};

	const handleDeleteTodo = (id) => {
		const deleteTodo = todos.filter((todo) => todo.id !== id);
		setTodos(deleteTodo);
	};

	// Fitur Tambahan: Menghapus semua todo
	const handleDeleteAllTodo = () => {
		setTodos([]);
	};

	const handleCheckTodo = (id) => {
		const checkTodo = todos.map((todo) => {
			if (todo.id === id) {
				!todo.completed ? (todo.completed = true) : (todo.completed = false);
			}
			return todo;
		});
		setTodos(checkTodo);
	};

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

	return (
		<>
			<TodoInput handleSubmit={handleSubmit} handleChange={(e) => setValue(e.target.value)} value={value} />

			{/* Fitur Tambahan: Informasi seputar total todo, menghapus semua todo, total todo yang sudah selesai, dan total todo yang belum selesai */}
			<InfoTodo
				todosLength={todos.length}
				deleteAllTodo={handleDeleteAllTodo}
				totalCompletedCount={getTotalCompletedTodos()}
				totalUncompletedCount={getTotalUncompletedTodos()}
			/>

			{/* Fitur Tambahan: Jika terdapat data todo, maka akan ditampilkan datanya. Tetapi, jika data todo kosong, maka akan ditampilkan informasi bahwa data kosong */}
			{todos.length > 0 ? <TodoList todoLists={todos} handleDeleteTodo={handleDeleteTodo} handleCheckTodo={handleCheckTodo} /> : <EmptyTodo />}
		</>
	);
};

export default Todo;
