import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./students/slice";
import teachersSlice from "./teachers/slice";

export const store = configureStore({
  reducer: {
    students: studentsSlice,
    teachers: teachersSlice,
  },
});
