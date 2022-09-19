import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import marketReducer from './features/market/marketSlice';
import bagSlice from './features/bag/bagSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		market: marketReducer,
		bag: bagSlice
	},
});

export type RootStore = ReturnType<typeof store.getState>