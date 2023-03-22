import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  amount: 0,
};

export const fetchApi = createAsyncThunk(
  "amount/fetch",
  async (id, thunkAPI) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data.name;
  }
);

export const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.amount = action.payload;
    })
    .
    addCase(fetchApi.rejected, (state, action) => {
      state.amount = "Envalid Id enter less 10";
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = amountSlice.actions;

export default amountSlice.reducer;
