import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "seat",
  initialState: {
    username: "",
    numSeats: 0,
    seats: [],
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setNumSeats: (state, action) => {
      state.numSeats = parseInt(action.payload);
    },
    setSeats: (state, action) => {
      state.seats = action.payload;
    },
  },
});

export const { setUsername, setNumSeats, setSeats } = seatSlice.actions;
export default seatSlice.reducer;
