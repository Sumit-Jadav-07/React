import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  content: [],
  isLoading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("content/fetchUsers", async () => {
  const response = await axios.get("https://node5.onrender.com/user/user");
  const data = response.data;
  return data
});

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default contentSlice.reducer;
