import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../export/functions";
import { dataBookings } from "../data/DataBookings";
import type { Bookings } from "../interfaces/BookingsInt";

interface BookingsState {
    bookings: Bookings[] | [],
    book: Bookings | null | undefined,
}

interface Action {
    type: string;
    payload: any;
}

export const getBookings = createAsyncThunk('bookings/getBookings', 
    async () => { return await getData(dataBookings)}
);

export const getBook = createAsyncThunk('book/getBook',
    async (id: string) => { return await id}
);

export const addBook = createAsyncThunk('book/addBook',
    async (newBook: Bookings) => {return await newBook}
);

export const deleteBook = createAsyncThunk('book/deleteBook',
    async (id: string) => {return await id}
);

export const editBook = createAsyncThunk('book/editBook',
async (book: Bookings) => {return await book}
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
            state.book = state.bookings.find(book => book['id'] === action.payload)
        });

        builder
        .addCase(addBook.fulfilled, (state: BookingsState, action: Action) => {
            state.bookings = [...state.bookings, action.payload];
        });

        builder
        .addCase(deleteBook.fulfilled, (state: BookingsState, action: Action) => {
            state.bookings = state.bookings.filter(book => book['id'] !== action.payload); 
        });

        builder
        .addCase(editBook.fulfilled, (state: BookingsState, action: Action) => {
            state.bookings = state.bookings.map(book => book.id === action.payload.id ? action.payload : book);
        });
    }

});

export default bookingsSlice.reducer;