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

export type StyledWrapperProps = {
	heightOfGameBoard: number;
};

export type invalidIndexesType = {
	invalidRowOfThreeIndexes: number[];
	invalidRowOfFourthIndexes: number[];
};

export type GameBoardProps = {
	invalidRowIndex: invalidIndexesType;
};

export type PointsCounterProps = {
	points: number;
	heightOfGameBoard: number;
};

export type ScoreSliceType = {
	score: number;
};

export type CandySliceType = {
	candyBeingDraggedId: number;
	candyBeingReplacedId: number;
	candyBeingDropped: boolean;
};
