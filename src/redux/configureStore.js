import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware()];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware
});

export default store;
