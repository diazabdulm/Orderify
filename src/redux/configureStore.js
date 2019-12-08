import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware()];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

const cartReducer = (state = {
    cartItems: 0,
}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            state = {
                ...state,
                cartItems: state.cartItems + 1,
            };
            break;
        default:
    }
    return state;
};

const rootReducer = combineReducers({
    cartReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware
});

export default store;