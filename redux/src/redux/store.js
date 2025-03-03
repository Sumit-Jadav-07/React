import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/slices/todoSlice";
import contentSlicer from "../redux/slices/contentSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    content: contentSlicer,
  },
});
