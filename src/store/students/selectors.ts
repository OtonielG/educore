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

export const selectStudentsGradeTotals = createSelector(
  [selectStudents],
  (students) => {
    const total = students.length;
    const primeroBasico = students.filter(
      (student) => student.grade === "Primero básico",
    ).length;
    const segundoBasico = students.filter(
      (student) => student.grade === "Segundo básico",
    ).length;
    const terceroBasico = students.filter(
      (student) => student.grade === "Tercero básico",
    ).length;

    return {
      primeroBasico: {
        students: primeroBasico,
        percentage: total === 0 ? 0 : (primeroBasico / total) * 100,
      },
      segundoBasico: {
        students: segundoBasico,
        percentage: total === 0 ? 0 : (segundoBasico / total) * 100,
      },
      terceroBasico: {
        students: terceroBasico,
        percentage: total === 0 ? 0 : (terceroBasico / total) * 100,
      },
    };
  },
);

export const selectTopStudentsByAverage = createSelector(
  [selectStudents],
  (students) =>
    [...students]
      .sort((firstStudent, secondStudent) => {
        return secondStudent.average - firstStudent.average;
      })
      .slice(0, 5),
);
