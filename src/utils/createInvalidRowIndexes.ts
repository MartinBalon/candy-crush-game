import { invalidIndexesType } from 'types';

export const createInvalidRowIndexes = (width: number, height: number) => {
	const invalidIndexes: invalidIndexesType = {
		invalidRowOfThreeIndexes: [],
		invalidRowOfFourthIndexes: [],
	};
	const gameBoardSize = width * height;

	for (let i = width; i <= gameBoardSize; i += width) {
		if (i === gameBoardSize) {
			invalidIndexes.invalidRowOfThreeIndexes.push(i - 1);
			invalidIndexes.invalidRowOfThreeIndexes.push(i);

			invalidIndexes.invalidRowOfFourthIndexes.push(i - 2);
			invalidIndexes.invalidRowOfFourthIndexes.push(i - 1);
			invalidIndexes.invalidRowOfFourthIndexes.push(i);
		} else {
			invalidIndexes.invalidRowOfThreeIndexes.push(i - 1);
			invalidIndexes.invalidRowOfThreeIndexes.push(i - 2);

			invalidIndexes.invalidRowOfFourthIndexes.push(i - 1);
			invalidIndexes.invalidRowOfFourthIndexes.push(i - 2);
			invalidIndexes.invalidRowOfFourthIndexes.push(i - 3);
		}
	}

	return invalidIndexes;
};
