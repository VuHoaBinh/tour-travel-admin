import { VariantType, SnackbarKey, SnackbarMessage } from 'notistack';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type NotificationState = {
  message: SnackbarMessage;
  variant: VariantType;
  key: SnackbarKey;
  onUpdate: number;
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: '',
    variant: 'default',
    key: 0,
    onUpdate: 0,
  } as NotificationState,
  reducers: {
    openAlert: (state, { payload: { message, variant, key } }) => {
      return { message, variant, key, onUpdate: Math.random() };
    },
  },
});

export const { openAlert } = notificationSlice.actions;

export const notificationSelector = ({ notification }: RootState) => notification;

export default notificationSlice.reducer;
