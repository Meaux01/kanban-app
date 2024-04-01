import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Create The Redux Store 
export const store = configureStore({
    reducer: {} // Add reducers here
});


setupListeners(store.dispatch)
