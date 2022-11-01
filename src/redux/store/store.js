import {configureStore} from "@reduxjs/toolkit";
import albumReducer from "../slices/album.slice";
import photoReducer from "../slices/photo.slice";

export const store = configureStore({
    reducer: {
        albumReducer,
        photoReducer
    }
});