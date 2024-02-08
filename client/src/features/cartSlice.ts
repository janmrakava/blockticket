/* eslint-disable @typescript-eslint/no-dynamic-delete */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type CartState = Record<string, Record<string, number>>;

const initialState: CartState = {};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ eventId: string; ticketType: string; quantity: number }>
    ) => {
      const { eventId, ticketType, quantity } = action.payload;
      if (state[eventId] === undefined) {
        state[eventId] = {};
      }
      state[eventId][ticketType] =
        (state[eventId]?.[ticketType] !== undefined ? state[eventId][ticketType] : 0) + quantity;
    },
    removeFromCart: (state, action: PayloadAction<{ eventId: string; ticketType: string }>) => {
      const { eventId, ticketType } = action.payload;
      if (state[eventId] === undefined) {
        delete state[eventId][ticketType];
        if (Object.keys(state[eventId]).length === 0) {
          delete state[eventId];
        }
      }
    },
    updateTicketQuantity: (
      state,
      action: PayloadAction<{ eventId: string; ticketType: string; quantity: number }>
    ) => {
      const { eventId, ticketType, quantity } = action.payload;
      if (state[eventId] === undefined) {
        state[eventId] = {};
      }
      state[eventId][ticketType] = quantity;
    },
    clearCart: (state) => {
      Object.keys(state).forEach((eventId) => {
        delete state[eventId];
      });
    }
  }
});

export const { addToCart, removeFromCart, updateTicketQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
