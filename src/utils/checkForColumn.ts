import { gameOptions } from './gameOptions';

export const checkForColumn = (currentColorArrangement: string[]): string[] => {
	const width = gameOptions.width;
	const height = gameOptions.height;
	const gameBoardSize = width * height;
	const updatedCurrentColorArrangement = currentColorArrangement;

	for (let i = 0; i < gameBoardSize; i++) {
		const firstInCol = i;
		const secondInCol = i + width;
		const thirdInCol = i + width * 2;
		const fourthInCol = i + width * 3;
		const columnIndexes = [firstInCol, secondInCol, thirdInCol, fourthInCol];
		const columnColors = [
			currentColorArrangement[firstInCol],
			currentColorArrangement[secondInCol],
			currentColorArrangement[thirdInCol],
			currentColorArrangement[fourthInCol],
		];

		if (!currentColorArrangement[thirdInCol]) {
			break;
		}

		// check if column of four
		if (
			currentColorArrangement[fourthInCol] &&
			columnColors[0] === columnColors[1] &&
			columnColors[1] === columnColors[2] &&
			columnColors[2] === columnColors[3]
		) {
			for (let i = 0; i <= 3; i++) {
				updatedCurrentColorArrangement[columnIndexes[i]] = '';
			}
		}

		// check if column of three
		if (
			columnColors[0] === columnColors[1] &&
			columnColors[1] === columnColors[2]
		) {
			for (let i = 0; i <= 2; i++) {
				updatedCurrentColorArrangement[columnIndexes[i]] = '';
			}
		}
	}

	return updatedCurrentColorArrangement;
};
