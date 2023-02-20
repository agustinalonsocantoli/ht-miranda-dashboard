import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../export/functions";
import { dataReviews } from "../data/DataReviews";

export const getReviews = createAsyncThunk('reviews/getReviews', 
    async () => { return await getData(dataReviews)}
);

export const getReview = createAsyncThunk('review/getReview', 
    async (id) => { return await id }
);

export const addReview = createAsyncThunk('review/addReview', 
    async (newReview) => { return await newReview }
);

export const deleteReview = createAsyncThunk('review/deleteReview', 
    async (id) => { return await id }
);

export const editReview = createAsyncThunk('review/editReview', 
    async (id) => { return await id }
);

const initialState = {
    reviews: [],
    review: ''
}

export const contactSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getReviews.fulfilled, (state, action) => {
            console.log('Success!');
            state.reviews = action.payload;
        })
        .addCase(getReviews.rejected, () => {
            console.log('Failed');
        });

        builder
        .addCase(getReview.fulfilled, (state, action) => {
            state.review = state.reviews.find(review => review.id === action.payload);
        });

        builder
        .addCase(addReview.fulfilled, (state, action) => {
            state.reviews = [...state.reviews, action.payload];
        });

        builder
        .addCase(deleteReview.fulfilled, (state, action) => {
            state.reviews = state.reviews.filter(review => review.id !== action.payload);
        });

        builder
        .addCase(editReview.fulfilled, (state, action) => {
            state.reviews = state.reviews.map(review => review.id === action.payload.id ? action.payload : review);
        });
    }
});

export default contactSlice.reducer;