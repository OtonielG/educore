import { Venus, Mars } from "lucide-react";

const students = [
  {
    id: 1,
    gender: "male",
    fullName: "Daniel Méndez García",
    grade: "6.º primaria",
    average: 97,
  },
  {
    id: 2,
    gender: "female",
    fullName: "Sofía Ramírez López",
    grade: "5.º primaria",
    average: 95,
  },
  {
    id: 3,
    gender: "male",
    fullName: "Mateo Castillo Pérez",
    grade: "6.º primaria",
    average: 93,
  },
  {
    id: 4,
    gender: "female",
    fullName: "Valeria Hernández Ruiz",
    grade: "4.º primaria",
    average: 91,
  },
  {
    id: 5,
    gender: "female",
    fullName: "Camila Morales Díaz",
    grade: "5.º primaria",
    average: 89,
  },
];

const topStudents = [...students].sort((a, b) => b.average - a.average);

export default function TopStudents() {
  return (
    <section className="flex h-full min-h-0 w-full flex-col gap-4 rounded-3xl border-2 border-sky-200 bg-sky-100 p-5 shadow-[inset_0_5px_12px_rgba(14,165,233,0.16),inset_0_-2px_5px_rgba(255,255,255,0.65)]">
      <h2 className="font-bespoke font-semibold">Estudiantes destacados</h2>

      <ul className="flex min-h-0 flex-1 flex-col gap-2">
        {topStudents.map((student, index) => {
          const Icon = student.gender === "male" ? Mars : Venus;

          return (
            <li
              key={student.id}
              className={`grid w-full flex-1 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border bg-white/85 px-3 py-3 shadow-sm sm:px-4 ${
                student.gender === "male"
                  ? "border-dashboard-blue/30"
                  : "border-dashboard-red/30"
              }`}
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold">
                {index + 1}
              </span>

              <div className="min-w-0">
                <p className="truncate font-semibold">{student.fullName}</p>

                <p className="truncate whitespace-nowrap text-xs text-dashboard-text-muted sm:text-sm">
                  {student.grade}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <span className="rounded-full bg-sky-100 px-2.5 py-1 text-sm font-semibold">
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
