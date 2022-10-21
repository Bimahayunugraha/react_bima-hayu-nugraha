import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserAPI from "../../apis/user.api";

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

export const fetchUsers = createAsyncThunk("fetch/users", async () => {
	try {
		const response = await UserAPI.getAllUsers();
		return response.data.user;
	} catch (error) {
		console.log(error);
	}
});

const usersSlice = createSlice({
	name: "users",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default usersSlice.reducer;
