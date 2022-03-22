import { gameOptions } from './gameOptions';
import { invalidIndexesType } from 'types';

export const checkForRow = (
	currentColorArrangement: string[],
	invalidIndex: invalidIndexesType
) => {
	const width = gameOptions.width;
	const height = gameOptions.height;
	const gameBoardSize = width * height;
	const updatedCurrentColorArrangement = currentColorArrangement;

	for (let i = 0; i < gameBoardSize; i++) {
		const firstInRow = i;
		const secondInRow = i + 1;
		const thirdInRow = i + 2;
		const fourthInRow = i + 3;
		const rowIndexes = [firstInRow, secondInRow, thirdInRow, fourthInRow];
		const rowColors = [
			currentColorArrangement[firstInRow],
			currentColorArrangement[secondInRow],
			currentColorArrangement[thirdInRow],
			currentColorArrangement[fourthInRow],
		];

		// check if row of three
		if (invalidIndex.invalidRowOfThreeIndexes.includes(i)) {
			continue;
		}
		if (rowColors[0] === rowColors[1] && rowColors[1] === rowColors[2]) {
			for (let i = 0; i <= 2; i++) {
				updatedCurrentColorArrangement[rowIndexes[i]] = '';
			}
		}

		// check if row of four
		if (invalidIndex.invalidRowOfFourthIndexes.includes(i)) {
			continue;
		}
		if (
			rowColors[0] === rowColors[1] &&
			rowColors[1] === rowColors[2] &&
			rowColors[2] === rowColors[3]
		) {
			for (let i = 0; i <= 3; i++) {
				updatedCurrentColorArrangement[rowIndexes[i]] = '';
			}
		}
	}

	return updatedCurrentColorArrangement;
};
