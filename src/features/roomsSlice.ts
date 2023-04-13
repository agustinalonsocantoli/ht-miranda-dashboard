import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Rooms } from "../interfaces/RoomsInt";
import { fetchApi } from "../export/functions.js";

interface RoomsState {
    rooms: Rooms[] | [],
    room: Rooms | null | undefined,
}

interface Action {
    type: string;
    payload: any;
}

export const getRooms = createAsyncThunk('rooms/getRooms', 
    () => { return fetchApi("rooms", "GET"); }
);

export const getRoom = createAsyncThunk('room/getRoom', 
    (id: string) => { return id}
);

export const addRoom = createAsyncThunk('room/addRoom',
    (newRoom: Rooms) => { return fetchApi("rooms", "POST", newRoom); } 
);

export const deleteRoom = createAsyncThunk('room/deleteRoom', 
    (id: string) => { return(fetchApi(`rooms/${id}`, "DELETE"), id) }
);

export const editRoom = createAsyncThunk('room/editRoom', 
    (room: Rooms) => { return fetchApi(`rooms/${room._id}`, "PUT", room); }
);

const initialState: RoomsState = {
    rooms: [],
    room: null
}

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getRooms.fulfilled, (state: RoomsState, action: Action) => {
            console.log('Success!');
            state.rooms = action.payload;
        })
        .addCase(getRooms.rejected, () => {
            console.log('Failed');
        });

        builder
        .addCase(getRoom.fulfilled, (state: RoomsState, action: Action) => {
            state.room = state.rooms.find(room => room['_id'] === action.payload);
        });

        builder
        .addCase(addRoom.fulfilled, (state: RoomsState, action: Action) => {
            state.rooms = [...state.rooms, action.payload];
        });

        builder
        .addCase(deleteRoom.fulfilled, (state: RoomsState, action: Action) => {
            state.rooms = state.rooms.filter((room: Rooms) => room._id !== action.payload);
        });

        builder
        .addCase(editRoom.fulfilled, (state: RoomsState, action: Action) => {
            state.rooms = state.rooms.map((room: Rooms) => room._id === action.payload._id ? action.payload : room);
        });
    }
});

export default roomsSlice.reducer;