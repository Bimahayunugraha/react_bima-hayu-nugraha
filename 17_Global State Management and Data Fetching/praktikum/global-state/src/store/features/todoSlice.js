import { createSlice } from "@reduxjs/toolkit";
import data from "../../TodoData";

const initialValue = data;

export const todosSlice = createSlice({
	name: "todo",
	initialState: {
		todos: initialValue,
	},
	reducers: {
		addTodo: (state, action) => {
			const addNewTodo = { id: state.todos.length + 1, title: action.payload, completed: false };

			state.todos.push(addNewTodo);
		},
		handleDeleteTodo: (state, action) => {
			state.todos = state.todos.filter((item) => item.id !== action.payload);
		},
		// Fitur Tambahan: Hapus semua daftar pekerjaan
		handleDeleteAllTodo: (state) => {
			state.todos = [];
		},
		handleCheckTodo: (state, action) => {
			const checkTodo = state.todos.findIndex((value) => value.id === action.payload);
			if (checkTodo !== -1) {
				state.todos[checkTodo].completed = !state.todos[checkTodo].completed;
			}
		},
	},
});

export const { addTodo, handleDeleteTodo, handleDeleteAllTodo, handleCheckTodo } = todosSlice.actions;

export default todosSlice.reducer;
