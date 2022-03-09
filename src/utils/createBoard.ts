import { gameOptions } from './gameOptions';

export const createBoard = (): string[] => {
	const width = gameOptions.width;
	const candyColors = gameOptions.candyColors;
	const randomColorArrangement: string[] = [];

	for (let i = 0; i < width * width; i++) {
		const randomColor =
			candyColors[Math.floor(Math.random() * candyColors.length)];
		randomColorArrangement.push(randomColor);
	}

	return randomColorArrangement;
};
