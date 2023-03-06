import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../export/functions";
import { dataUsers } from "../data/DataUsers";
import type { Users } from "../interfaces/UsersInt";

interface UsersState {
    users: Users[] | [];
    user: Users | null | undefined; 
}

interface Action {
    type: string;
    payload: any;
}

export const getUsers = createAsyncThunk('users/getUsers', 
    async () => { return await getData(dataUsers)}
);

export const getUser = createAsyncThunk('user/getUser',
    async (id: string) => { return await id}
);

export const addUser = createAsyncThunk('user/addUser',
    async (newUser: Users) => { return await newUser}
);

export const deleteUser = createAsyncThunk('user/deleteUser',
    async (id: string) => { return await id}
);

export const editUser = createAsyncThunk('user/editUser',
    async (user: Users) => { return await user}
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
            state.user = state.users.find(user => user['id'] === action.payload);
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
            state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user);
        });
    }
});

export default usersSlice.reducer;