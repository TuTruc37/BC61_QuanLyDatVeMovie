import seatReducer from "../slice/seat.js";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    seat: seatReducer,
  },
});
