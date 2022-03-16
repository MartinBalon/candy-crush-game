import { gameOptions } from './gameOptions';

export const moveCandyToEmptySpace = (currentColorArrangement: string[]) => {
	const width = gameOptions.width;
	const height = gameOptions.height;
	const gameBoardSize = width * height;
	const updatedCurrentColorArrangement = [...currentColorArrangement];

	for (let i = 0; i < gameBoardSize - width; i++) {
		if (updatedCurrentColorArrangement[i + width] === '') {
			updatedCurrentColorArrangement[i + width] =
				updatedCurrentColorArrangement[i];
			updatedCurrentColorArrangement[i] = '';
		}
	}

	return updatedCurrentColorArrangement;
};
