import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import TodoAPI from "../../apis/todo.api";

const initialState = {
	data: [],
	componentStatus: false,
	error: null,
	fetchStatus: "idle",
};

export const fetchTodos = createAsyncThunk("fetch/todos", async () => {
	try {
		const response = await TodoAPI.getAllTodos();
		return response.data.todo;
	} catch (error) {
		console.log(error);
	}
});

export const createTodo = createAsyncThunk("create/todos", async (data) => {
	try {
		const response = await TodoAPI.createTodos(data);
		return response.data.insert_todo;
	} catch (error) {
		console.log(error);
	}
});

export const updateTodo = createAsyncThunk("update/todos", async ({ id, completed }) => {
	try {
		const response = await TodoAPI.updateTodo({ id, completed });
		return response.data.update_todo;
	} catch (error) {
		console.log(error);
	}
});

export const deleteTodoById = createAsyncThunk("delete/todos/byid", async (id) => {
	try {
		const response = await TodoAPI.deleteTodoById(id);
		return response.data.delete_todo;
	} catch (error) {
		console.log(error);
	}
});

export const deleteAllTodo = createAsyncThunk("delete/todos", async () => {
	try {
		const response = await TodoAPI.deleteAllTodo();
		return response.data.delete_todo;
	} catch (error) {
		console.log(error);
	}
});

const todosSlice = createSlice({
	name: "todos",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.pending, (state, action) => {
				state.fetchStatus = "loading";
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.fetchStatus = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.fetchStatus = "failed";
				state.error = action.error.message;
			})
			.addCase(createTodo.fulfilled, (state, action) => {
				state.data.push(action.payload);
				state.componentStatus = !state.componentStatus;
			})
			.addCase(updateTodo.fulfilled, (state, action) => {
				state.componentStatus = !state.componentStatus;
			})
			.addCase(deleteTodoById.fulfilled, (state, action) => {
				state.componentStatus = !state.componentStatus;
			})
			.addCase(deleteAllTodo.fulfilled, (state, action) => {
				state.data = [];
				state.componentStatus = !state.componentStatus;
			});
	},
});

export default todosSlice.reducer;
