import { configureStore } from "@reduxjs/toolkit";
import notificationsSlice from "./notifications/slice";
import studentsSlice from "./students/slice";
import teachersSlice from "./teachers/slice";

export const store = configureStore({
  reducer: {
    notifications: notificationsSlice,
    students: studentsSlice,
    teachers: teachersSlice,
  },
});
