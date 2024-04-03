import { combineSlices } from "@reduxjs/toolkit";
import { fireStoreApi } from "./service/apiSlice";

export const rootReducer = combineSlices({
    [fireStoreApi.reducerPath]: fireStoreApi.reducer
})