import { Venus, Mars } from "lucide-react";

const students = [
  {
    id: 1,
    gender: "male",
    fullName: "Daniel Méndez García",
    grade: "3.º básico",
    average: 97,
    birthDate: "2011-03-14",
    age: 15,
  },
  {
    id: 2,
    gender: "female",
    fullName: "Sofía Ramírez López",
    grade: "2.º básico",
    average: 95,
    birthDate: "2012-07-22",
    age: 14,
  },
  {
    id: 3,
    gender: "male",
    fullName: "Mateo Castillo Pérez",
    grade: "3.º básico",
    average: 93,
    birthDate: "2011-11-08",
    age: 14,
  },
  {
    id: 4,
    gender: "female",
    fullName: "Valeria Hernández Ruiz",
    grade: "1.º básico",
    average: 91,
    birthDate: "2013-02-17",
    age: 13,
  },
  {
    id: 5,
    gender: "female",
    fullName: "Camila Morales Díaz",
    grade: "2.º básico",
    average: 89,
    birthDate: "2012-05-30",
    age: 14,
  },
];

const topStudents = [...students].sort((a, b) => b.average - a.average);

export default function TopStudents() {
  return (
    <section className="flex h-full min-h-0 w-full flex-col gap-4 rounded-3xl bg-dashboard-surface p-5 shadow-[inset_0_3px_8px_rgba(0,0,0,0.12),inset_0_-1px_3px_rgba(255,255,255,0.55)]">
      <h2 className="font-bespoke font-semibold">Estudiantes destacados</h2>

      <ul className="flex flex-1 flex-col gap-2">
        {topStudents.map((student, index) => {
          const Icon = student.gender === "male" ? Mars : Venus;

          return (
            <li
              key={student.id}
              className={`grid w-full flex-1 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border px-3 py-3 sm:px-4 ${
                student.gender === "male"
                  ? "border-dashboard-blue/25 bg-dashboard-blue/5"
                  : "border-dashboard-red/25 bg-dashboard-red/5"
              }`}
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-dashboard-background text-sm font-bold">
                {index + 1}
              </span>

              <div className="min-w-0">
                <p className="truncate font-semibold">{student.fullName}</p>

                <p className="truncate whitespace-nowrap text-xs text-dashboard-text-muted sm:text-sm">
                  {student.grade} · {student.age} años
                </p>

                <p className="truncate whitespace-nowrap text-[11px] text-dashboard-text-muted/80 sm:text-xs">
                  Nacimiento: {student.birthDate}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <span className="rounded-full bg-dashboard-background px-2.5 py-1 text-sm font-semibold">
                  {student.average}
                </span>

                <Icon
                  className={`size-4 shrink-0 sm:size-5 ${
                    student.gender === "male"
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
