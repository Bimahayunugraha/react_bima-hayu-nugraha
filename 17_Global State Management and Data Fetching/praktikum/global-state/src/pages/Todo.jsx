import { useEffect } from "react";
import Container from "../components/Container/Container";
import Header from "../components/Todo/HeaderTodo/Header";
import InfoTodo from "../components/Todo/InfoTodo/InfoTodo";
import Sidebar from "../components/Todo/Navbar/Navbar";
import TodoInput from "../components/Todo/TodoInput/TodoInput";
import TodoList from "../components/Todo/TodoList/TodoList";

const Todo = () => {
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
				<TodoInput />

				{/* Fitur Tambahan: Informasi seputar total todo, menghapus semua todo, total todo yang sudah selesai, dan total todo yang belum selesai */}
				<InfoTodo />

				{/* Fitur Tambahan: Jika terdapat data todo, maka akan ditampilkan datanya. Tetapi, jika data todo kosong, maka akan ditampilkan informasi bahwa data kosong */}
				<TodoList />
			</Container>
		</>
	);
};

export default Todo;
