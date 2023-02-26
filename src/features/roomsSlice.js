import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../export/functions";
import { dataRooms } from "../data/DataRooms";

export const getRooms = createAsyncThunk('rooms/getRooms', 
    async () => { return await getData(dataRooms)}
);

export const getRoom = createAsyncThunk('room/getRoom', 
    async (id) => { return await id}
);

export const addRoom = createAsyncThunk('room/addRoom', 
    async (newRoom) => { return await newRoom}
);

export const deleteRoom = createAsyncThunk('room/deleteRoom', 
    async (id) => { return await id}
);

export const editRoom = createAsyncThunk('room/editRoom', 
    async (room) => { return await room}
);

const initialState = {
    rooms: [],
    room: null
}

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getRooms.fulfilled, (state, action) => {
            console.log('Success!');
            state.rooms = action.payload;
        })
        .addCase(getRooms.rejected, () => {
            console.log('Failed');
        });

        builder
        .addCase(getRoom.fulfilled, (state, action) => {
            state.room = state.rooms.find(room => room.id === action.payload);
        });

        builder
        .addCase(addRoom.fulfilled, (state, action) => {
            state.rooms = [...state.rooms, action.payload];
        });

        builder
        .addCase(deleteRoom.fulfilled, (state, action) => {
            state.rooms = state.rooms.filter(room => room.id !== action.payload);
        });

        builder
        .addCase(editRoom.fulfilled, (state, action) => {
            state.rooms = state.rooms.map(room => room.id === action.payload.id ? action.payload : room);
        });
    }
});

export default roomsSlice.reducer;