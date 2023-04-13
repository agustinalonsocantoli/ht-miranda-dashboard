import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { BookingsInt } from "../interfaces/BookingsInt";
import { fetchApi } from "../export/functions.js";

interface BookingsState {
    bookings: BookingsInt[] | [],
    book: BookingsInt | null | undefined,
}

interface Action {
    type: string;
    payload: any;
}

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
    book: null
}

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getBookings.fulfilled, (state: BookingsState, action: Action) => {
            console.log('Success!');
            state.bookings = action.payload;
        })
        .addCase(getBookings.rejected, () => {
            console.log('Failed');
        });

        builder
        .addCase(getBook.fulfilled, (state: BookingsState, action: Action) => {
            state.book = state.bookings.find(book => book['_id'] === action.payload)
        });

        builder
        .addCase(addBook.fulfilled, (state: BookingsState, action: Action) => {
            state.bookings = [...state.bookings, action.payload];
        });

        builder
        .addCase(deleteBook.fulfilled, (state: BookingsState, action: Action) => {
            state.bookings = state.bookings.filter(book => book['_id'] !== action.payload); 
        });

        builder
        .addCase(editBook.fulfilled, (state: BookingsState, action: Action) => {
            state.bookings = state.bookings.map((book: BookingsInt) => book._id === action.payload._id ? action.payload : book);
        });
    }

});

export default bookingsSlice.reducer;