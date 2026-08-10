import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { teachers, type Teacher } from "@/src/features/teachers";

export const teachersSlice = createSlice({
  name: "teachers",
  initialState: teachers,
  reducers: {
    addTeacher: (state, action: PayloadAction<Teacher>) => {
      state.push(action.payload);
    },
    updateTeacher: (state, action: PayloadAction<Teacher>) => {
      const teacherIndex = state.findIndex(
        (teacher) => teacher.id === action.payload.id,
      );

      if (teacherIndex !== -1) {
        state[teacherIndex] = action.payload;
      }
    },
    deleteTeacher: (state, action: PayloadAction<string>) => {
      return state.filter((teacher) => teacher.id !== action.payload);
    },
  },
});

export const { addTeacher, updateTeacher, deleteTeacher } =
  teachersSlice.actions;

export default teachersSlice.reducer;
