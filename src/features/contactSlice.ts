import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Reviews } from "../interfaces/ContactInt";
import { fetchApi } from "../export/functions.js";

interface ReviewsState {
    reviews: Reviews[] | [],
    review: Reviews | null | undefined,
    statusData: string;
}

interface Action {
    type: string;
    payload: any;
}

export const getReviews = createAsyncThunk('reviews/getReviews', 
    () => { return fetchApi("contact", "GET"); }
);

export const getReview = createAsyncThunk('review/getReview', 
    (id: string) => { return id}
);

export const addReview = createAsyncThunk('review/addReview', 
    (newReview: Reviews) => { return fetchApi("contact", "POST", newReview); } 
);

export const deleteReview = createAsyncThunk('review/deleteReview', 
    (id: string) => { return (fetchApi(`contact/${id}`, "DELETE"), id); }
);

export const editReview = createAsyncThunk('review/editReview', 
    (review: Reviews) => { return fetchApi(`contact/${review._id}`, "PUT", review); }
);

const initialState: ReviewsState = {
    reviews: [],
    review: null,
    statusData: "idle",
}

export const contactSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getReviews.fulfilled, (state: ReviewsState, action: Action) => {
            console.log('Success!');
            state.statusData = "fulfilled"
            state.reviews = action.payload;
        })
        .addCase(getReviews.pending, (state: ReviewsState, action: Action) => {
            console.log('Pending');
            state.statusData = "pending"
        })
        .addCase(getReviews.rejected, (state: ReviewsState, action: Action) => {
            console.log('Failed');
            state.statusData = "rejected"
        });

        builder
        .addCase(getReview.fulfilled, (state: ReviewsState, action: Action) => {
            state.review = state.reviews.find(review => review['_id'] === action.payload);
        });

        builder
        .addCase(addReview.fulfilled, (state: ReviewsState, action: Action) => {
            state.reviews = [...state.reviews, action.payload];
        });

        builder
        .addCase(deleteReview.fulfilled, (state: ReviewsState, action: Action) => {
            state.reviews = state.reviews.filter(review => review['_id'] !== action.payload);
        });

        builder
        .addCase(editReview.fulfilled, (state: ReviewsState, action: Action) => {
            state.reviews = state.reviews.map((review: Reviews) => review._id === action.payload._id ? action.payload : review);
        });
    }
});

export default contactSlice.reducer;