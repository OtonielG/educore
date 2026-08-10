import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { students, type Student } from "@/src/features/students";

export const studentsSlice = createSlice({
  name: "students",
  initialState: students,
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state.push(action.payload);
    },
    deleteStudent: (state, action: PayloadAction<string>) => {
      return state.filter((student) => student.id !== action.payload);
    },
  },
});

export const { addStudent, deleteStudent } = studentsSlice.actions;

export default studentsSlice.reducer;
