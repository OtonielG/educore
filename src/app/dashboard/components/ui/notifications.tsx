import {
  BellRing,
  GraduationCap,
  Pencil,
  Trash2,
  UserPlus,
  Users,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "student-added",
    title: "Estudiante agregado",
    description: "Daniel Méndez García fue agregado al sistema.",
    time: "Hace 10 min",
  },
  {
    id: 2,
    type: "teacher-updated",
    title: "Maestro modificado",
    description: "La información de Marvin López fue actualizada.",
    time: "Hace 25 min",
  },
  {
    id: 3,
    type: "student-deleted",
    title: "Estudiante eliminado",
    description: "Camila Morales Díaz fue eliminada del sistema.",
    time: "Hace 1 h",
  },
];

const notificationStyles = {
  added: {
    icon: UserPlus,
    border: "border-t-dashboard-green",
    background: "bg-green-50/70",
    iconBackground: "bg-green-100",
    iconColor: "text-dashboard-green",
  },
  updated: {
    icon: Pencil,
    border: "border-t-dashboard-blue",
    background: "bg-blue-50/70",
    iconBackground: "bg-blue-100",
    iconColor: "text-dashboard-blue",
  },
  deleted: {
    icon: Trash2,
    border: "border-t-dashboard-red",
    background: "bg-red-50/70",
    iconBackground: "bg-red-100",
    iconColor: "text-dashboard-red",
  },
};

export default function Notifications() {
  return (
    <section className="flex h-auto w-full flex-col gap-4 rounded-3xl border-2 border-dashboard-surface bg-dashboard-surface p-5 shadow-[inset_0_3px_8px_rgba(0,0,0,0.12),inset_0_-1px_3px_rgba(255,255,255,0.55)] lg:h-full">
      <div className="flex items-center justify-between">
        <h2 className="font-bespoke font-semibold">Notificaciones</h2>

        <BellRing className="size-5 text-dashboard-text-muted" />
      </div>

      <ul className="flex flex-1 flex-col gap-3">
        {notifications.map((notification) => {
          const action = notification.type.split("-")[1] as
            | "added"
            | "updated"
            | "deleted";

          const entity = notification.type.split("-")[0];

          const style = notificationStyles[action];
          const ActionIcon = style.icon;
          const EntityIcon = entity === "student" ? GraduationCap : Users;

          return (
            <li
              key={notification.id}
              className={`flex flex-1 items-start gap-3 rounded-2xl border border-dashboard-border border-t-4 px-4 py-3 ${style.border} ${style.background}`}
            >
              <div
                className={`relative flex size-10 shrink-0 items-center justify-center rounded-full ${style.iconBackground}`}
              >
                <EntityIcon className={`size-5 ${style.iconColor}`} />

                <ActionIcon
                  className={`absolute -bottom-1 -right-1 size-4 rounded-full bg-white p-0.5 ${style.iconColor}`}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="truncate text-sm font-semibold sm:text-base">
                    {notification.title}
                  </h3>

                  <span className="shrink-0 text-xs text-dashboard-text-muted">
                    {notification.time}
                  </span>
                </div>

                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-dashboard-text-muted sm:text-sm">
                  {notification.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
