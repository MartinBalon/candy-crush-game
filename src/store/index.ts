import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type CandySliceType = {
	candyBeingDraggedId: number;
	candyBeingReplacedId: number;
	candyBeingDropped: boolean;
};

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

const store = configureStore({
	reducer: {
		candy: candySlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export const selectCandy = (state: RootState) => state.candy;

export default store;
