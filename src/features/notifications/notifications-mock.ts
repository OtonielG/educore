import type { Notification } from "./notifications-types";

const now = Date.now();

export const notifications: Notification[] = [
  {
    id: "notification-001",
    type: "student-added",
    personName: "Carlos Hernández López",
    createdAt: now - 5 * 60 * 1000,
  },
  {
    id: "notification-002",
    type: "teacher-updated",
    personName: "Claudia Isabel Ramírez",
    createdAt: now - 2 * 60 * 60 * 1000,
  },
  {
    id: "notification-003",
    type: "student-updated",
    personName: "María Fernanda López",
    createdAt: now - 24 * 60 * 60 * 1000,
  },
  {
    id: "notification-004",
    type: "teacher-deleted",
    personName: "Jorge Luis Castillo",
    createdAt: now - (2 * 24 + 3) * 60 * 60 * 1000,
  },
];
