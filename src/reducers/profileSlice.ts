import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isLoggedIn: false,
  } as ProfileRecordType,
  reducers: {
    signIn: (state, { payload }) => {
      const profile = { ...payload, ...state, isLoggedIn: true };
      localStorage.setItem('profile', JSON.stringify(profile));
      return profile;
    },
    signOut: (state, { payload }) => {
      localStorage.removeItem('profile');
      return { isLoggedIn: false };
    },
  },
});

export const { signIn, signOut } = profileSlice.actions;

export const profileSelector = ({ profile }: RootState) => profile;

export default profileSlice.reducer;
