/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/languageSlice';

/**
 * * Configure redux of the app
 */
export const store = configureStore({
  reducer: {
    language: languageReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
