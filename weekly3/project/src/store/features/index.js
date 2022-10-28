import { combineReducers } from "@reduxjs/toolkit";

import eventsSlice from "./eventsSlice";
import scrollSlice from "./scrollSlice";
import usersSlice from "./usersSlice";

export const rootReducer = combineReducers({
	users: usersSlice,
	events: eventsSlice,
	scroll: scrollSlice,
});
