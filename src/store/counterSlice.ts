import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScoreSliceType } from 'types';

const initialScoreSlice: ScoreSliceType = {
	score: 0,
};

export const scoreSlice = createSlice({
	name: 'score',
	initialState: initialScoreSlice,
	reducers: {
		incrementScore: (state, action: PayloadAction<number>) => {
			state.score += action.payload;
		},
		resetScorre: (state) => {
			state.score = 0;
		},
	},
});

export default scoreSlice;
