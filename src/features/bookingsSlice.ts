import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { BookingsInt } from "../interfaces/BookingsInt";
import { fetchApi } from "../export/functions.js";
import toast from "react-hot-toast";

interface BookingsState {
    bookings: BookingsInt[] | [],
    book: BookingsInt | null | undefined,
    statusData: string;
};

interface Action {
    type: string;
    payload: any;
};

export const getBookings = createAsyncThunk('bookings/getBookings', 
    () => { return fetchApi("bookings", "GET"); }
);

export const getBook = createAsyncThunk('book/getBook',
    (id: string) => { return id}
);

export const addBook = createAsyncThunk('book/addBook',
    (newBook: BookingsInt) => { return fetchApi("bookings", "POST", newBook); }
);

export const deleteBook = createAsyncThunk('book/deleteBook',
    (id: string) => { return (fetchApi(`bookings/${id}`, "DELETE"), id); }
);

export const editBook = createAsyncThunk('book/editBook',
    (book: BookingsInt) => { return fetchApi(`bookings/${book._id}`, "PUT", book); }
);

const initialState: BookingsState = {
    bookings: [],
    book: null,
    statusData: "idle",
};

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getBookings.fulfilled, (state: BookingsState, action: Action) => {
            state.statusData = "fulfilled";
            state.bookings = action.payload;
            toast.success("Bookings upload successful");
        })
        .addCase(getBookings.pending, (state: BookingsState, action: Action) => {
            state.statusData = "pending";
        })
        .addCase(getBookings.rejected, (state: BookingsState, action: Action) => {
            state.statusData = "rejected";
            toast.error("Bookings upload rejected");
        });

        builder
        .addCase(getBook.fulfilled, (state: BookingsState, action: Action) => {
            state.book = state.bookings.find((book: BookingsInt) => book._id === action.payload)
        });

        builder
        .addCase(addBook.fulfilled, (state: BookingsState, action: Action) => {
            state.bookings = [...state.bookings, action.payload];
            state.statusData = "idle";
            toast.success("Added a new book successfully");
        });

        builder
        .addCase(deleteBook.fulfilled, (state: BookingsState, action: Action) => {
            state.bookings = state.bookings.filter((book: BookingsInt) => book._id !== action.payload);
            toast.success("Book deleted successfully");
        });

        builder
        .addCase(editBook.fulfilled, (state: BookingsState, action: Action) => {
            state.bookings = state.bookings.map((book: BookingsInt) => book._id === action.payload._id ? action.payload : book);
            state.statusData = "idle";
            toast.success("Book edited successfully");
        });
    }

});

export default bookingsSlice.reducer;