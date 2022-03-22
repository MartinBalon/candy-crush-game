import { gameOptions } from './gameOptions';

const width = gameOptions.width;

export const switchCandyPosition = (
	candyBeingDraggedId: number,
	candyBeingReplacedId: number,
	colorArrangement: string[]
) => {
	const validMoves = [candyBeingDraggedId - width, candyBeingDraggedId + width];

	if (candyBeingDraggedId % width !== 0) {
		validMoves.push(candyBeingDraggedId - 1);
	}

	if ((candyBeingDraggedId + 1) % width !== 0) {
		validMoves.push(candyBeingDraggedId + 1);
	}

	const updatedColorArrangement = [...colorArrangement];
	const candyBeingDragged = updatedColorArrangement[candyBeingDraggedId];
	const candyBeingReplaced = updatedColorArrangement[candyBeingReplacedId];

	if (validMoves.includes(candyBeingReplacedId)) {
		updatedColorArrangement[candyBeingDraggedId] = candyBeingReplaced;
		updatedColorArrangement[candyBeingReplacedId] = candyBeingDragged;
	}

	return updatedColorArrangement;
};
