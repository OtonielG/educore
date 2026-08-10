import type { store } from "@/src/store";

type RootState = ReturnType<typeof store.getState>;

export const selectTeachers = (state: RootState) => state.teachers;
