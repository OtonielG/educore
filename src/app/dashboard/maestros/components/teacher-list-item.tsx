import { Mars, Pencil, Trash2, Venus } from "lucide-react";
import type { Teacher } from "@/src/features/teachers";

type TeacherListItemProps = {
  teacher: Teacher;
  isEven: boolean;
  onEdit: (teacher: Teacher) => void;
  onDelete: (teacher: Teacher) => void;
};

export default function TeacherListItem({
  teacher,
  isEven,
  onEdit,
  onDelete,
}: TeacherListItemProps) {
  const GenderIcon = teacher.gender === "Masculino" ? Mars : Venus;

  return (
    <li
      className={`
        grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-xl px-4 py-4 text-sm
        sm:grid-cols-[1.35fr_0.85fr_1.15fr_auto]
        md:grid-cols-[1.35fr_0.65fr_0.8fr_1.1fr_auto]
        lg:grid-cols-[1.25fr_0.55fr_0.75fr_0.75fr_1fr_1.4fr_auto]
        xl:grid-cols-[1.2fr_0.55fr_0.75fr_0.7fr_1fr_1.35fr_0.85fr_auto]
        ${isEven ? "bg-gray-50" : "bg-dashboard-surface"}
      `}
    >
      <span className="min-w-0 truncate font-medium">{teacher.fullName}</span>
      <span className="hidden md:block">{teacher.code}</span>
      <span className="hidden lg:block">{teacher.birthDate}</span>
      <span className="hidden sm:block">{teacher.phone}</span>
      <span className="hidden min-w-0 truncate sm:block">
        {teacher.classSubject}
      </span>
      <span className="hidden min-w-0 truncate lg:block" title={teacher.email}>
        {teacher.email}
      </span>

      <span className="hidden items-center gap-2 xl:flex">
        <GenderIcon className="size-4 shrink-0" />
        {teacher.gender}
      </span>

      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-dashboard-accent text-dashboard-surface"
          aria-label={`Editar a ${teacher.fullName}`}
          onClick={() => onEdit(teacher)}
        >
          <Pencil className="size-4" />
        </button>

        <button
          type="button"
          className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200"
          aria-label={`Eliminar a ${teacher.fullName}`}
          onClick={() => onDelete(teacher)}
        >
          <Trash2 className="size-4" />
        </button>
      </div>
    </li>
  );
}
