import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        item: itemReducer,
        cart: cartReducer,
    },
});

export default appStore;