import {
  ArrowDownWideNarrow,
  Plus,
  Search,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

const actions = [
  {
    label: "Filtrar estudiantes",
    icon: SlidersHorizontal,
  },
  {
    label: "Ordenar estudiantes",
    icon: ArrowDownWideNarrow,
  },
  {
    label: "Agregar estudiante",
    icon: Plus,
  },
];

function SearchForm() {
  return (
    <form className="flex w-full min-w-0 max-w-md grow shrink items-center rounded-full border-2 border-white bg-gray-50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2),inset_0_3px_8px_rgba(0,0,0,0.25)]">
      <input
        type="text"
        className="min-w-0 grow bg-transparent px-5 py-2 outline-none"
      />

      <button type="submit" className="shrink-0 px-4" aria-label="Buscar">
        <Search className="size-5" />
      </button>
    </form>
  );
}

function ToolbarAction({
  label,
  icon: Icon,
}: {
  label: string;
  icon: LucideIcon;
}) {
  return (
    <button
      type="button"
      className="flex size-9 items-center justify-center rounded-full text-dashboard-surface/80 bg-dashboard-accent"
      aria-label={label}
    >
      <Icon className="size-5" />
    </button>
  );
}

export default function StudentsToolbar() {
  return (
    <div className="bg-dashboard-surface w-full flex flex-col justify-between items-start lg:items-center lg:flex-row gap-2">
      <h2 className="font-bespoke font-semibold">Todos Los Estudiantes</h2>

      <div className="flex w-full min-w-0 flex-col lg:w-auto lg:flex-row gap-3">
        <SearchForm />

        <div className="flex items-center gap-3">
          {actions.map((action) => (
            <ToolbarAction
              key={action.label}
              label={action.label}
              icon={action.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
