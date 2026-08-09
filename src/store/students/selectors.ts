import { createSelector } from "@reduxjs/toolkit";

import type { store } from "@/src/store";

type RootState = ReturnType<typeof store.getState>;

export const selectStudents = (state: RootState) => state.students;

export const selectStudentsPaymentStatusTotals = createSelector(
  [selectStudents],
  (students) => ({
    solventes: students.filter(
      (student) => student.paymentStatus === "Solvente",
    ).length,
    morosos: students.filter((student) => student.paymentStatus === "Moroso")
      .length,
  }),
);

export const selectStudentsGenderTotals = createSelector(
  [selectStudents],
  (students) => ({
    hombres: students.filter((student) => student.gender === "Masculino")
      .length,
    mujeres: students.filter((student) => student.gender === "Femenino").length,
  }),
);
