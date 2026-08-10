import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  NewNotification,
  Notification,
} from "@/src/features/notifications";

const initialState: Notification[] = [];

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: {
      reducer: (state, action: PayloadAction<Notification>) => {
        state.unshift(action.payload);
        state.splice(4);
      },
      prepare: (notification: NewNotification) => ({
        payload: {
          ...notification,
          id: crypto.randomUUID(),
          createdAt: Date.now(),
        },
      }),
    },
  },
});

export const { addNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;
