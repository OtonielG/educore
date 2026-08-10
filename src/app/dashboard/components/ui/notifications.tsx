"use client";

import { useEffect, useState } from "react";
import {
  BellRing,
  GraduationCap,
  Pencil,
  Trash2,
  UserPlus,
  Users,
} from "lucide-react";
import { useSelector } from "react-redux";
import {
  formatElapsedTime,
  type NotificationType,
} from "@/src/features/notifications";
import { selectNotifications } from "@/src/store/notifications/selectors";

const ONE_MINUTE = 60_000;

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

type NotificationDetails = {
  action: keyof typeof notificationStyles;
  entity: "student" | "teacher";
  title: string;
  getDescription: (personName: string) => string;
};

const notificationDetails: Record<NotificationType, NotificationDetails> = {
  "student-added": {
    action: "added",
    entity: "student",
    title: "Estudiante agregado",
    getDescription: (personName) =>
      `${personName} fue agregado al sistema.`,
  },
  "student-updated": {
    action: "updated",
    entity: "student",
    title: "Estudiante modificado",
    getDescription: (personName) =>
      `La información de ${personName} fue actualizada.`,
  },
  "student-deleted": {
    action: "deleted",
    entity: "student",
    title: "Estudiante eliminado",
    getDescription: (personName) =>
      `${personName} fue eliminado del sistema.`,
  },
  "teacher-added": {
    action: "added",
    entity: "teacher",
    title: "Maestro agregado",
    getDescription: (personName) =>
      `${personName} fue agregado al sistema.`,
  },
  "teacher-updated": {
    action: "updated",
    entity: "teacher",
    title: "Maestro modificado",
    getDescription: (personName) =>
      `La información de ${personName} fue actualizada.`,
  },
  "teacher-deleted": {
    action: "deleted",
    entity: "teacher",
    title: "Maestro eliminado",
    getDescription: (personName) =>
      `${personName} fue eliminado del sistema.`,
  },
};

export default function Notifications() {
  const notifications = useSelector(selectNotifications);
  const [currentTime, setCurrentTime] = useState(Date.now);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, ONE_MINUTE);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex h-auto w-full flex-col gap-3 rounded-3xl bg-dashboard-surface p-5 shadow-[inset_0_3px_8px_rgba(0,0,0,0.12),inset_0_-1px_3px_rgba(255,255,255,0.55)] lg:h-full">
      <div className="flex items-center justify-between">
        <h2 className="font-bespoke font-semibold">Notificaciones</h2>

        <BellRing className="size-5 text-dashboard-text-muted" />
      </div>

      <ul className="flex min-h-0 flex-1 flex-col gap-2">
        {notifications.length === 0 ? (
          <li className="flex flex-1 items-center justify-center text-sm text-dashboard-text-muted">
            No hay notificaciones
          </li>
        ) : null}

        {notifications.map((notification) => {
          const details = notificationDetails[notification.type];
          const style = notificationStyles[details.action];
          const ActionIcon = style.icon;
          const EntityIcon =
            details.entity === "student" ? GraduationCap : Users;

          return (
            <li
              key={notification.id}
              className={`flex min-h-0 flex-1 items-start gap-3 rounded-2xl border border-dashboard-border border-t-4 px-3 py-2.5 sm:px-4 ${style.border} ${style.background}`}
            >
              <div
                className={`relative flex size-9 shrink-0 items-center justify-center rounded-full ${style.iconBackground}`}
              >
                <EntityIcon className={`size-4 ${style.iconColor}`} />

                <ActionIcon
                  className={`absolute -bottom-1 -right-1 size-3.5 rounded-full bg-white p-0.5 ${style.iconColor}`}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="truncate text-sm font-semibold">
                    {details.title}
                  </h3>

                  <span className="shrink-0 text-[11px] text-dashboard-text-muted sm:text-xs">
                    {formatElapsedTime(notification.createdAt, currentTime)}
                  </span>
                </div>

                <p className="mt-1 line-clamp-2 text-xs leading-snug text-dashboard-text-muted sm:text-sm">
                  {details.getDescription(notification.personName)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
