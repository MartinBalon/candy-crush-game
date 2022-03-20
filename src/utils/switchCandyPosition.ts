import { gameOptions } from './gameOptions';

const width = gameOptions.width;

export const switchCandyPosition = (
	candyBeingDraggedId: number,
	candyBeingReplacedId: number,
	colorArrangement: string[]
) => {
	const validMoves = [
		candyBeingDraggedId - 1,
		candyBeingDraggedId - width,
		candyBeingDraggedId + 1,
		candyBeingDraggedId + width,
	];

	const updatedColorArrangement = [...colorArrangement];
	const candyBeingDragged = updatedColorArrangement[candyBeingDraggedId];
	const candyBeingReplaced = updatedColorArrangement[candyBeingReplacedId];

	if (validMoves.includes(candyBeingReplacedId)) {
		updatedColorArrangement[candyBeingDraggedId] = candyBeingReplaced;
		updatedColorArrangement[candyBeingReplacedId] = candyBeingDragged;
	}

	return updatedColorArrangement;
};
