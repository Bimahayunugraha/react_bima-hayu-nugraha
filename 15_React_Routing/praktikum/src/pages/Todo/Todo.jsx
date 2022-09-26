import { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import data from "../../TodoData";
import TodoInput from "./components/TodoInput/TodoInput";
import EmptyTodo from "./components/EmptyTodo/EmptyTodo";
import InfoTodo from "./components/InfoTodo/InfoTodo";
import Header from "./components/HeaderTodo/Header";
import Container from "../../components/Container/Container";
import Sidebar from "../../components/Partials/Todo/Navbar/Navbar";

const Todo = (props) => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState(data);
	const [disabled, setDisabled] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!value) {
			alert("Anda harus mengisi inputan tersebut terlebih dahulu sebelum Anda melakukan submit");
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

	// Fitur Tambahan: Hapus semua daftar pekerjaan
	const handleDeleteAllTodo = () => {
		setTodos([]);
	};

	const handleCheckTodo = (id) => {
		const checkTodo = todos.findIndex((value) => value.id === id);
		let todoData = [...todos];
		if (checkTodo !== -1) {
			todoData[checkTodo].completed = !todoData[checkTodo].completed;
		}

		setTodos(todoData);
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

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		if (todos.length > 0) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [todos]);

	useEffect(() => {
		document.title = "Todo Home";
	});

	const sidebarItems = [
		{
			title: "Home",
			route: "/",
			icon: <i className="far fa-home-alt me-2" width="16" height="16"></i>,
		},
		{
			title: "About",
			route: "/about/about-app",
			icon: <i className="far fa-info-circle me-2" width="16" height="16"></i>,
		},
	];

	return (
		<>
			<Sidebar sidebarItems={sidebarItems} />
			<Container>
				<Header />
				<TodoInput handleSubmit={handleSubmit} handleChange={handleChange} value={value} />

				{/* Fitur Tambahan: Informasi seputar total todo, menghapus semua todo, total todo yang sudah selesai, dan total todo yang belum selesai */}
				<InfoTodo
					todosLength={todos.length}
					deleteAllTodo={handleDeleteAllTodo}
					totalCompletedCount={getTotalCompletedTodos()}
					totalUncompletedCount={getTotalUncompletedTodos()}
					disabled={disabled}
				/>

				{/* Fitur Tambahan: Jika terdapat data todo, maka akan ditampilkan datanya. Tetapi, jika data todo kosong, maka akan ditampilkan informasi bahwa data kosong */}
				{todos.length > 0 ? <TodoList todoLists={todos} handleDeleteTodo={handleDeleteTodo} handleCheckTodo={handleCheckTodo} /> : <EmptyTodo />}
			</Container>
		</>
	);
};

export default Todo;
