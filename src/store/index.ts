import { configureStore } from '@reduxjs/toolkit';
import candySlice from './candySlice';
import scoreSlice from './counterSlice';

const store = configureStore({
	reducer: {
		candy: candySlice.reducer,
		score: scoreSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export const selectCandy = (state: RootState) => state.candy;
export const selectScore = (state: RootState) => state.score;

export default store;
