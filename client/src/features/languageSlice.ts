import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface LanguageState {
  appLanguage: string;
}

const initialState: LanguageState = {
  appLanguage: 'cz',
};

export const languageSlice = createSlice({
  name: 'appLanguage',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.appLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;