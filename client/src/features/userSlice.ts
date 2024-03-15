/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { type IUserData } from '../api/users/user';

export interface UserState {
  isLoggedIn: boolean;
  userInfo: IUserData | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userInfo: null
};

export const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserData>) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
