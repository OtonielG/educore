import { Eye, Mars, Trash2, Venus } from "lucide-react";
import type { Student } from "../types";

type StudentListItemProps = {
  student: Student;
  isEven: boolean;
};

export default function StudentListItem({
  student,
  isEven,
}: StudentListItemProps) {
  const GenderIcon = student.gender === "Masculino" ? Mars : Venus;

  return (
    <li
      className={`
        grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-xl px-4 py-4 text-sm
        sm:grid-cols-[1.5fr_0.9fr_1fr_0.6fr]
        md:grid-cols-[1.5fr_0.7fr_0.8fr_1fr_0.6fr]
        lg:grid-cols-[1.5fr_0.7fr_0.9fr_0.8fr_1fr_0.6fr_0.6fr]
        xl:grid-cols-[1.5fr_0.7fr_0.9fr_0.8fr_1fr_0.6fr_0.7fr_0.6fr]
        ${isEven ? "bg-gray-50" : "bg-dashboard-surface"}
      `}
    >
      <span className="min-w-0 truncate font-medium">{student.fullName}</span>
      <span className="hidden md:block">{student.code}</span>
      <span className="hidden lg:block">{student.birthDate}</span>
      <span className="hidden sm:block">{student.phone}</span>
      <span className="hidden sm:block">{student.grade}</span>
      <span className="hidden font-semibold lg:block">{student.average}</span>

      <span className="hidden items-center gap-2 xl:flex">
        <GenderIcon className="size-4 shrink-0" />
        {student.gender}
      </span>

      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-dashboard-accent text-dashboard-surface"
          aria-label={`Abrir perfil de ${student.fullName}`}
        >
          <Eye className="size-4" />
        </button>

        <button
          type="button"
          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600"
          aria-label={`Eliminar a ${student.fullName}`}
        >
          <Trash2 className="size-4" />
        </button>
      </div>
    </li>
  );
}
