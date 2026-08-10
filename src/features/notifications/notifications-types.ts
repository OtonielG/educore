export type NotificationType =
  | "student-added"
  | "student-updated"
  | "student-deleted"
  | "teacher-added"
  | "teacher-updated"
  | "teacher-deleted";

export type Notification = {
  id: string;
  type: NotificationType;
  personName: string;
  createdAt: number;
};

export type NewNotification = Pick<Notification, "type" | "personName">;
