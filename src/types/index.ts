export type CandyProps = {
	candyColor: string;
	index: number;
};

export type CandyListProps = {
	listOfCandies: string[];
};

export type StyledButtonProps = {
	heightOfGameBoard: number;
};

export type invalidIndexesType = {
	invalidRowOfThreeIndexes: number[];
	invalidRowOfFourthIndexes: number[];
};

export type GameBoardProps = {
	invalidRowIndex: invalidIndexesType;
};
