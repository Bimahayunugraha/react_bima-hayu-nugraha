import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EventsAPI from "../../apis/event.api";

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

export const fetchEvents = createAsyncThunk("fetch/events", async () => {
	try {
		const response = await EventsAPI.getAllEvents();
		return response.data;
	} catch (error) {
		console.log(error);
	}
});

const eventsSlice = createSlice({
	name: "events",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchEvents.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchEvents.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchEvents.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default eventsSlice.reducer;
