import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  points: 0,
};

const inc = "amount/incrementByAmount";

export const bounsSlice = createSlice({
  name: "bouns",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
    decrement: (state) => {
      state.points -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(inc, (state, action) => {
      if (action.payload >= 100) {
        state.points += 1;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = bounsSlice.actions;

export default bounsSlice.reducer;
