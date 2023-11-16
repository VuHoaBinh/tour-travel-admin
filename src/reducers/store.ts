import { configureStore } from '@reduxjs/toolkit';
import notification from './notificationSlice';
import profile from './profileSlice';

export const store = configureStore({
  reducer: {
    notification,
    profile,
  },
});

export type RootState = ReturnType<typeof store.getState>;
