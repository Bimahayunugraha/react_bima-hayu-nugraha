import { combineReducers } from "@reduxjs/toolkit";

import buttonSlice from "./buttonSlice";
import todosSlice from "./todosSlice";

export const rootReducer = combineReducers({
	todos: todosSlice,
	button: buttonSlice,
});
