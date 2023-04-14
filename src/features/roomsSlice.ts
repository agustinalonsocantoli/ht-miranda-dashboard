import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Rooms } from "../interfaces/RoomsInt";
import { fetchApi } from "../export/functions.js";
import toast from "react-hot-toast";

interface RoomsState {
    rooms: Rooms[] | [],
    room: Rooms | null | undefined,
    statusData: string;
};

interface Action {
    type: string;
    payload: any;
};

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
    room: null,
    statusData: "idle",
};

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getRooms.fulfilled, (state: RoomsState, action: Action) => {
            state.statusData = "fulfilled";
            state.rooms = action.payload;
            toast.success("Rooms upload successful");
        })
        .addCase(getRooms.pending, (state: RoomsState, action: Action) => {
            state.statusData = "pending";
        })
        .addCase(getRooms.rejected, (state: RoomsState, action: Action) => {
            state.statusData = "rejected";
            toast.error("Rooms upload rejected");
        });

        builder
        .addCase(getRoom.fulfilled, (state: RoomsState, action: Action) => {
            state.room = state.rooms.find((room: Rooms) => room._id === action.payload);
        });

        builder
        .addCase(addRoom.fulfilled, (state: RoomsState, action: Action) => {
            state.rooms = [...state.rooms, action.payload];
            state.statusData = "idle";
            toast.success("Added a new room successfully");
        });

        builder
        .addCase(deleteRoom.fulfilled, (state: RoomsState, action: Action) => {
            state.rooms = state.rooms.filter((room: Rooms) => room._id !== action.payload);
            toast.success("Room deleted successfully");
        });

        builder
        .addCase(editRoom.fulfilled, (state: RoomsState, action: Action) => {
            state.rooms = state.rooms.map((room: Rooms) => room._id === action.payload._id ? action.payload : room);
            state.statusData = "idle";
            toast.success("Room edited successfully");
        });
    }
});

export default roomsSlice.reducer;