export type CandyProps = {
	candyColor: string;
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
