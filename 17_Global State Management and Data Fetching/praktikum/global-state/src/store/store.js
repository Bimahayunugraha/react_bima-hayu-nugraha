import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todosSlice from "./features/todoSlice";
import buttonSlice from "./features/buttonSlice";

const reducers = combineReducers({
	todo: todosSlice,
	button: buttonSlice,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
const persistor = persistStore(store);

export { store, persistor };
