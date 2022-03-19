import { gameOptions } from './gameOptions';
import { createCandy } from './createCandy';

export const moveCandyToEmptySpace = (currentColorArrangement: string[]) => {
	const width = gameOptions.width;
	const height = gameOptions.height;
	const gameBoardSize = width * height;
	const updatedCurrentColorArrangement = [...currentColorArrangement];

	for (let i = 0; i < gameBoardSize - width; i++) {
		// check for the firt row
		if (i >= 0 && i < width && updatedCurrentColorArrangement[i] === '') {
			updatedCurrentColorArrangement[i] = createCandy();
		}

		if (updatedCurrentColorArrangement[i + width] === '') {
			updatedCurrentColorArrangement[i + width] =
				updatedCurrentColorArrangement[i];
			updatedCurrentColorArrangement[i] = '';
		}
	}

	return updatedCurrentColorArrangement;
};
