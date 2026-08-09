"use client";

import { Venus, Mars } from "lucide-react";
import { useSelector } from "react-redux";

import { selectTopStudentsByAverage } from "@/src/store/students/selectors";

const gradeLabels = {
  "Primero básico": "1.º básico",
  "Segundo básico": "2.º básico",
  "Tercero básico": "3.º básico",
};

const getStudentAge = (birthDate: string) => {
  const [day, month, year] = birthDate.split("/").map(Number);
  const today = new Date();
  let age = today.getFullYear() - year;
  const hasBirthdayPassed =
    today.getMonth() + 1 > month ||
    (today.getMonth() + 1 === month && today.getDate() >= day);

  if (!hasBirthdayPassed) {
    age -= 1;
  }

  return age;
};

export default function TopStudents() {
  const topStudents = useSelector(selectTopStudentsByAverage);

  return (
    <section className="flex h-full min-h-0 w-full flex-col gap-4 rounded-3xl bg-dashboard-surface p-5 shadow-[inset_0_3px_8px_rgba(0,0,0,0.12),inset_0_-1px_3px_rgba(255,255,255,0.55)]">
      <h2 className="font-bespoke font-semibold">Estudiantes destacados</h2>

      <ul className="flex flex-1 flex-col gap-2">
        {topStudents.map((student, index) => {
          const isMale = student.gender === "Masculino";
          const Icon = isMale ? Mars : Venus;

          return (
            <li
              key={student.id}
              className={`grid w-full flex-1 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border px-3 py-3 sm:px-4 ${
                isMale
                  ? "border-dashboard-blue/25 bg-dashboard-blue/15"
                  : "border-dashboard-red/25 bg-dashboard-red/15"
              }`}
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-dashboard-primary/90 text-sm font-bold text-white">
                {index + 1}
              </span>

              <div className="min-w-0">
                <p className="truncate font-semibold">{student.fullName}</p>

                <p className="truncate whitespace-nowrap font-medium text-xs text-dashboard-text-muted sm:text-sm">
                  {gradeLabels[student.grade]} · {getStudentAge(student.birthDate)}{" "}
                  años
                </p>

                <p className="truncate whitespace-nowrap font-medium text-[11px] text-dashboard-text-muted/90 sm:text-xs">
                  Nacimiento: {student.birthDate}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <span className="rounded-full bg-dashboard-primary/90 px-2.5 py-1 text-sm font-semibold text-white">
                  {student.average}
                </span>

                <Icon
                  className={`size-4 shrink-0 sm:size-5 ${
                    isMale
                      ? "text-dashboard-blue"
                      : "text-dashboard-red/80"
                  }`}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
