import { configureStore } from "@reduxjs/toolkit";
import bookingsSlice from "../features/bookingsSlice";
import contactSlice from "../features/contactSlice";
import roomsSlice from "../features/roomsSlice"
import usersSlice from "../features/usersSlice";

export const store = configureStore({
    reducer: {
        bookingsReducer: bookingsSlice,
        reviewsReducer: contactSlice,
        roomsReducer: roomsSlice,
        usersReducer: usersSlice,
    }
});