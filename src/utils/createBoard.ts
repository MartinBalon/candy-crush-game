import { gameOptions } from './gameOptions';
import { createCandy } from './createCandy';

export const createBoard = () => {
	const width = gameOptions.width;
	const randomColorArrangement: string[] = [];

	for (let i = 0; i < width * width; i++) {
		randomColorArrangement.push(createCandy());
	}

	return randomColorArrangement;
};
