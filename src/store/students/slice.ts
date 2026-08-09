import { createSlice } from "@reduxjs/toolkit";
import { students } from "@/src/features/students";

export const studentsSlice = createSlice({
  name: "students",
  initialState: students,
  reducers: {},
});

export default studentsSlice.reducer;
