import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../export/functions";
import { dataUsers } from "../data/DataUsers";

export const getUsers = createAsyncThunk('users/getUsers', 
    async () => { return await getData(dataUsers)}
);

export const getUser = createAsyncThunk('user/getUser',
    async (id) => { return await id}
);

export const addUser = createAsyncThunk('user/addUser',
    async (newUser) => { return await newUser}
);

export const deleteUser = createAsyncThunk('user/deleteUser',
    async (id) => { return await id}
);

export const editUser = createAsyncThunk('user/editUser',
    async (id) => { return await id}
);


const initialState = {
    users: [],
    user: ''
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.fulfilled, (state, action) => {
            console.log('Success!');
            state.users = action.payload;
        })
        .addCase(getUsers.rejected, () => {
            console.log('Failed');
        });

        builder
        .addCase(getUser.fulfilled, (state, action) => {
            state.user = state.users.find(user => user.id === action.payload);
        });

        builder
        .addCase(addUser.fulfilled, (state, action) => {
            state.users = [...state.users, action.payload];
        });

        builder
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        });

        builder
        .addCase(editUser.fulfilled, (state, action) => {
            state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user);
        });
    }
});

export default usersSlice.reducer;