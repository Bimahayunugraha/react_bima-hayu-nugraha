import axiosInstance from "../configs/axiosInstance";

const TodoAPI = {
	async getAllTodos() {
		try {
			const response = await axiosInstance.get("/");
			return response;
		} catch (error) {
			const { message } = error.response.data;
			throw new Error(message);
		}
	},

	async createTodos(data) {
		try {
			const response = await axiosInstance.post("/", data);
			return response;
		} catch (error) {
			console.log(error);
		}
	},

	async updateTodo(data) {
		try {
			const id = data.id;
			const response = await axiosInstance.patch(`/${id}`, data);
			return response;
		} catch (error) {
			console.log(error);
		}
	},

	async deleteTodoById(id) {
		try {
			const response = await axiosInstance.delete(`/${id}`);
			return response;
		} catch (error) {
			console.log(error);
		}
	},

	async deleteAllTodo() {
		try {
			const response = await axiosInstance.delete("/");
			return response;
		} catch (error) {
			console.log(error);
		}
	},
};

export default TodoAPI;
