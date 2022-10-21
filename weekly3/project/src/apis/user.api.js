import usersInstance from "../configs/usersInstance";

const UserAPI = {
	async getAllUsers() {
		try {
			const response = await usersInstance.get("/user");
			return response;
		} catch (error) {
			const { message } = error.response.data;
			throw new Error(message);
		}
	},
};

export default UserAPI;
