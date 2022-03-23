import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CandySliceType } from 'types';

const initialCandySlice: CandySliceType = {
	candyBeingDraggedId: 0,
	candyBeingReplacedId: 0,
	candyBeingDropped: false,
};

export const candySlice = createSlice({
	name: 'candy',
	initialState: initialCandySlice,
	reducers: {
		onCandyBeingDragged: (state, action: PayloadAction<number>) => {
			state.candyBeingDropped = false;
			state.candyBeingDraggedId = action.payload;
		},
		onCandyBeingReplaced: (state, action: PayloadAction<number>) => {
			state.candyBeingDropped = false;
			state.candyBeingReplacedId = action.payload;
		},
		onCandyBeingDropped: (state, action: PayloadAction<boolean>) => {
			state.candyBeingDropped = action.payload;
		},
	},
});

export const {
	onCandyBeingDragged,
	onCandyBeingReplaced,
	onCandyBeingDropped,
} = candySlice.actions;

export default candySlice;
