import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../export/functions";
import { dataRooms } from "../data/DataRooms";
import type { Rooms } from "../interfaces/RoomsInt";

interface RoomsState {
    rooms: Rooms[] | [],
    room: Rooms | null | undefined,
}

interface Action {
    type: string;
    payload: any;
}

export const getRooms = createAsyncThunk('rooms/getRooms', 
    async () => { return await getData(dataRooms)}
);

export const getRoom = createAsyncThunk('room/getRoom', 
    async (id: string) => { return await id}
);

export const addRoom = createAsyncThunk('room/addRoom', 
    async (newRoom: Rooms) => { return await newRoom}
);

export const deleteRoom = createAsyncThunk('room/deleteRoom', 
    async (id: string) => { return await id}
);

export const editRoom = createAsyncThunk('room/editRoom', 
    async (room: Rooms) => { return await room}
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
            state.room = state.rooms.find(room => room['id'] === action.payload);
        });

        builder
        .addCase(addRoom.fulfilled, (state: RoomsState, action: Action) => {
            state.rooms = [...state.rooms, action.payload];
        });

        builder
        .addCase(deleteRoom.fulfilled, (state: RoomsState, action: Action) => {
            state.rooms = state.rooms.filter(room => room['id'] !== action.payload);
        });

        builder
        .addCase(editRoom.fulfilled, (state: RoomsState, action: Action) => {
            state.rooms = state.rooms.map(room => room.id === action.payload.id ? action.payload : room);
        });
    }
});

export default roomsSlice.reducer;