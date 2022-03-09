import { gameOptions } from './gameOptions';

export const checkForColumnOfThree = (
	currentColorArrangement: string[]
): string[] => {
	const width = gameOptions.width;
	const height = gameOptions.height;
	const gameBoardSize = width * height;
	const updatedCurrentColorArrangement = currentColorArrangement;

	for (let i = 0; i < gameBoardSize; i++) {
		const firstInCol = i;
		const secondInCol = i + width;
		const thirdInCol = i + width * 2;
		const columnOfThreeIndexes = [firstInCol, secondInCol, thirdInCol];
		const columnOfThreeColors = [
			currentColorArrangement[firstInCol],
			currentColorArrangement[secondInCol],
			currentColorArrangement[thirdInCol],
		];
		if (!currentColorArrangement[thirdInCol]) {
			break;
		}

		if (
			columnOfThreeColors[0] === columnOfThreeColors[1] &&
			columnOfThreeColors[1] === columnOfThreeColors[2]
		) {
			console.log('same: ' + i);
			columnOfThreeIndexes.forEach(
				(candy) => (updatedCurrentColorArrangement[candy] = '')
			);
		}
	}

	return updatedCurrentColorArrangement;
};
