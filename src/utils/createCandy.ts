import { gameOptions } from './gameOptions';

export const createCandy = () => {
	const candyColors = gameOptions.candyColors;

	const randomColor =
		candyColors[Math.floor(Math.random() * candyColors.length)];

	return randomColor;
};
