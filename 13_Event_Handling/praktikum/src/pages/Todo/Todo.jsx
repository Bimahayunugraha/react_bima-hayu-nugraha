import { Component } from "react";
import TodoList from "../components/TodoList/TodoList";
import data from "../../TodoData";
import TodoInput from "../components/TodoInput/TodoInput";
import EmptyTodo from "../components/EmptyTodo/EmptyTodo";
import InfoTodo from "../components/InfoTodo/InfoTodo";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { data };
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const IsNotEmpty = this.state.title;
		if (!IsNotEmpty) {
			alert("Anda harus mengisi inputan tersebut terlebih dahulu sebelum Anda melakukan submit");
			return;
		}
		const addTodo = { data: [...this.state.data, { id: this.state.data.length + 1, title: this.state.title, completed: false }] };

		this.setState(addTodo);

		this.setState({ title: "" });
	};

	handleDeleteTodo = (id) => {
		const deleteTodo = this.state.data.filter((todo) => todo.id !== id);
		this.setState({ data: deleteTodo });
	};

	handleDeleteAllTodo = () => {
		this.setState({ data: [] });
	};

	handleCheckTodo = (id) => {
		const checkTodo = this.state.data.findIndex((value) => value.id === id);
		let todoData = [...this.state.data];
		if (checkTodo !== -1) {
			todoData[checkTodo].completed = !todoData[checkTodo].completed;
		}

		this.setState({ data: todoData });
	};

	// Fitur Tambahan: Total todo yang sudah selesai
	getTotalCompletedTodos = () => {
		const totalCounts = this.state.data.reduce((total, num) => {
			return total + num.completed;
		}, 0);

		return totalCounts;
	};

	// Fitur Tambahan: Total todo yang belum selesai
	getTotalUncompletedTodos = () => {
		const totalCounts = this.state.data.reduce((total, num) => {
			return total + !num.completed;
		}, 0);

		return totalCounts;
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<>
				<TodoInput handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.title || ""} />

				{/* Fitur Tambahan: Informasi seputar total todo, menghapus semua todo, total todo yang sudah selesai, dan total todo yang belum selesai */}
				<InfoTodo
					todosLength={this.state.data.length}
					deleteAllTodo={this.handleDeleteAllTodo}
					totalCompletedCount={this.getTotalCompletedTodos()}
					totalUncompletedCount={this.getTotalUncompletedTodos()}
				/>

				{/* Fitur Tambahan: Jika terdapat data todo, maka akan ditampilkan datanya. Tetapi, jika data todo kosong, maka akan ditampilkan informasi bahwa data kosong */}
				{this.state.data.length > 0 ? (
					<TodoList todoLists={this.state.data} handleDeleteTodo={this.handleDeleteTodo} handleCheckTodo={this.handleCheckTodo} />
				) : (
					<EmptyTodo />
				)}
			</>
		);
	}
}

export default Todo;
