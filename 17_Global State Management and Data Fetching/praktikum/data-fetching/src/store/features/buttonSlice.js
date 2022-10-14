import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const buttonSlice = createSlice({
	name: "button",
	initialState,
	reducers: {
		disabledButton: (state, action) => {
			state = action.payload;
			return state;
		},
	},
});

export const { disabledButton } = buttonSlice.actions;

export default buttonSlice.reducer;
