import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Users } from "../interfaces/UsersInt";
import { fetchApi } from "../export/functions.js";
import toast from "react-hot-toast";

interface UsersState {
    users: Users[] | [];
    user: Users | null | undefined;
    statusData: string;
};

interface Action {
    type: string;
    payload: any;
};

export const getUsers = createAsyncThunk('users/getUsers', 
    () => { return fetchApi("users", "GET"); }
);

export const getUser = createAsyncThunk('user/getUser',
    (id: string) => { return id }
);

export const addUser = createAsyncThunk('user/addUser',
    (newUser: Users) => { return fetchApi("users", "POST", newUser); }
);

export const deleteUser = createAsyncThunk('user/deleteUser',
    (id: string) => { return (fetchApi(`users/${id}`, "DELETE"), id); }
);

export const editUser = createAsyncThunk('user/editUser',
    (user: Users) => { return fetchApi(`users/${user._id}`, "PUT", user); }
);


const initialState: UsersState = {
    users: [],
    user: null,
    statusData: "idle",
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.fulfilled, (state: UsersState, action: Action) => {
            state.statusData = "fulfilled";
            state.users = action.payload;
            toast.success("Users upload successful");
        })
        .addCase(getUsers.pending, (state: UsersState, action: Action) => {
            state.statusData = "pending";
        })
        .addCase(getUsers.rejected, (state: UsersState, action: Action) => {
            state.statusData = "rejected";
            toast.error("Users upload rejected");
        });

        builder
        .addCase(getUser.fulfilled, (state: UsersState, action: Action) => {
            state.user = state.users.find((user: Users) => user._id === action.payload);
        });

        builder
        .addCase(addUser.fulfilled, (state: UsersState, action: Action) => {
            state.users = [...state.users, action.payload];
            state.statusData = "idle";
            toast.success("Added a new user successfully");
        });

        builder
        .addCase(deleteUser.fulfilled, (state: UsersState, action: Action) => {
            state.users = state.users.filter((user: Users) => user._id !== action.payload);
            toast.success("User deleted successfully");
        });

        builder
        .addCase(editUser.fulfilled, (state: UsersState, action: Action) => {
            state.users = state.users.map((user: Users) => user._id === action.payload._id ? action.payload : user);
            state.statusData = "idle";
            toast.success("User edited successfully");
        });
    }
});

export default usersSlice.reducer;