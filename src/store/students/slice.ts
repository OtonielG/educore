import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { students } from "@/src/features/students";

export const studentsSlice = createSlice({
  name: "students",
  initialState: students,
  reducers: {
    deleteStudent: (state, action: PayloadAction<string>) => {
      return state.filter((student) => student.id !== action.payload);
    },
  },
});

export const { deleteStudent } = studentsSlice.actions;

export default studentsSlice.reducer;
