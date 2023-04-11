import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Users } from "../interfaces/UsersInt";
import { fetchApi } from "../export/functions.js";

interface UsersState {
    users: Users[] | [];
    user: Users | null | undefined; 
}

interface Action {
    type: string;
    payload: any;
}

export const getUsers = createAsyncThunk('users/getUsers', 
    () => { return fetchApi("users", "GET"); }
);

export const getUser = createAsyncThunk('user/getUser',
    (id: string) => { return id}
    // (id: string) => { return fetchApi(`users/${id}`, "GET"); }
);

export const addUser = createAsyncThunk('user/addUser',
    // async (newUser: Users) => { return await newUser}
    (newUser: Users) => { return fetchApi("users", "POST", newUser); }
);

export const deleteUser = createAsyncThunk('user/deleteUser',
    (id: string) => { return fetchApi(`users/${id}`, "DELETE"); }
);

export const editUser = createAsyncThunk('user/editUser',
    // async (user: Users) => { return await user}
    (user: Users) => { return fetchApi(`users/${user._id}`, "PUT", user); }
);


const initialState: UsersState = {
    users: [],
    user: null,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.fulfilled, (state: UsersState, action: Action) => {
            console.log('Success!');
            state.users = action.payload;
        })
        .addCase(getUsers.rejected, () => {
            console.log('Failed');
        });

        builder
        .addCase(getUser.fulfilled, (state: UsersState, action: Action) => {
            state.user = state.users.find(user => user['_id'] === action.payload);
            // state.user = action.payload;
        });

        builder
        .addCase(addUser.fulfilled, (state: UsersState, action: Action) => {
            state.users = [...state.users, action.payload];
        });

        builder
        .addCase(deleteUser.fulfilled, (state: UsersState, action: Action) => {
            state.users = state.users.filter(user => user['id'] !== action.payload);
        });

        builder
        .addCase(editUser.fulfilled, (state: UsersState, action: Action) => {
            state.users = state.users.map((user: Users) => user._id === action.payload._id ? action.payload : user);
        });
    }
});

export default usersSlice.reducer;