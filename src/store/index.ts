import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type CandySliceType = {
	candyBeingDraggedId: number;
	candyBeingReplacedId: number;
};

const initialCandySlice: CandySliceType = {
	candyBeingDraggedId: 0,
	candyBeingReplacedId: 0,
};

export const candySlice = createSlice({
	name: 'candy',
	initialState: initialCandySlice,
	reducers: {
		onCandyBeingDragged: (state, action: PayloadAction<number>) => {
			state.candyBeingDraggedId = action.payload;
		},
		onCandyBeingReplaced: (state, action: PayloadAction<number>) => {
			state.candyBeingReplacedId = action.payload;
		},
	},
});

export const { onCandyBeingDragged, onCandyBeingReplaced } = candySlice.actions;

const store = configureStore({
	reducer: {
		candy: candySlice.reducer,
	},
});

type RootState = ReturnType<typeof store.getState>;

export const selectCandy = (state: RootState) => state.candy;

export default store;
