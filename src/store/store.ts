import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '@/features/inventory/inventorySlice';

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});

// Inferred types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;