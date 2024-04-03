import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootReducer } from "./rootReducer";
import { fireStoreApi } from "./service/apiSlice";

// Create The Redux Store 
export const store = configureStore({
    reducer: rootReducer, // Add reducers here
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fireStoreApi.middleware)
});


setupListeners(store.dispatch)
