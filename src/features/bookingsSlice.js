import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../export/functions";
import { dataBookings } from "../data/DataBookings";

export const getBookings = createAsyncThunk('bookings/getBookings', 
    async () => { return await getData(dataBookings)}
);

export const getBook = createAsyncThunk('book/getBook',
    async (id) => { return await id}
);

export const addBook = createAsyncThunk('book/addBook',
    async (newBook) => {return await newBook}
);

export const deleteBook = createAsyncThunk('book/deleteBook',
    async (id) => {return await id}
);

export const editBook = createAsyncThunk('book/editBook',
async (book) => {return await book}
);

const initialState = {
    bookings: [],
    book: null
}

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getBookings.fulfilled, (state, action) => {
            console.log('Success!');
            state.bookings = action.payload;
        })
        .addCase(getBookings.rejected, () => {
            console.log('Failed');
        });

        builder
        .addCase(getBook.fulfilled, (state, action) => {
            state.book = state.bookings.find(book => book.id === action.payload)
        });

        builder
        .addCase(addBook.fulfilled, (state, action) => {
            state.bookings = [...state.bookings, action.payload];
        });

        builder
        .addCase(deleteBook.fulfilled, (state, action) => {
            state.bookings = state.bookings.filter(book => book.id !== action.payload); 
        });

        builder
        .addCase(editBook.fulfilled, (state, action) => {
            state.bookings = state.bookings.map(book => book.id === action.payload.id ? action.payload : book);
        });
    }

});

export default bookingsSlice.reducer;