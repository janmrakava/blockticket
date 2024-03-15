/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/languageSlice';
import cartReducer from '../features/cartSlice';

/**
 * * Configure redux of the app
 */
export const store = configureStore({
  reducer: {
    language: languageReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
