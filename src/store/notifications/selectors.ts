import type { store } from "@/src/store";

type RootState = ReturnType<typeof store.getState>;

export const selectNotifications = (state: RootState) => state.notifications;
