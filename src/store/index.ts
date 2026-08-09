import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./students/slice";

export const store = configureStore({
  reducer: {
    students: studentsSlice,
  },
});
