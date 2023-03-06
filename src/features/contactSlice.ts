import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../export/functions";
import { dataReviews } from "../data/DataReviews";
import type { Reviews } from "../interfaces/ContactInt";

interface ReviewsState {
    reviews: Reviews[] | [],
    review: Reviews | null | undefined,
}

interface Action {
    type: string;
    payload: any;
}

export const getReviews = createAsyncThunk('reviews/getReviews', 
    async () => { return await getData(dataReviews)}
);

export const getReview = createAsyncThunk('review/getReview', 
    async (id: string) => { return await id }
);

export const addReview = createAsyncThunk('review/addReview', 
    async (newReview: Reviews) => { return await newReview }
);

export const deleteReview = createAsyncThunk('review/deleteReview', 
    async (id: string) => { return await id }
);

export const editReview = createAsyncThunk('review/editReview', 
    async (review: Reviews) => { return await review }
);

const initialState: ReviewsState = {
    reviews: [],
    review: null
}

export const contactSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getReviews.fulfilled, (state: ReviewsState, action: Action) => {
            console.log('Success!');
            state.reviews = action.payload;
        })
        .addCase(getReviews.rejected, () => {
            console.log('Failed');
        });

        builder
        .addCase(getReview.fulfilled, (state: ReviewsState, action: Action) => {
            state.review = state.reviews.find(review => review['id'] === action.payload);
        });

        builder
        .addCase(addReview.fulfilled, (state: ReviewsState, action: Action) => {
            state.reviews = [...state.reviews, action.payload];
        });

        builder
        .addCase(deleteReview.fulfilled, (state: ReviewsState, action: Action) => {
            state.reviews = state.reviews.filter(review => review['id'] !== action.payload);
        });

        builder
        .addCase(editReview.fulfilled, (state: ReviewsState, action: Action) => {
            state.reviews = state.reviews.map(review => review.id === action.payload.id ? action.payload : review);
        });
    }
});

export default contactSlice.reducer;