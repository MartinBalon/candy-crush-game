import React, { useEffect, useState } from 'react';
import CandyList from 'components/CandyList';

import { createBoard } from 'utils/createBoard';
import { checkForColumn } from 'utils/checkForColumn';
import { checkForRow } from 'utils/checkForRow';
import { moveCandyToEmptySpace } from 'utils/moveCandyToEmptySpace';

import { GameBoardProps } from 'types';
import { StyledWrapper, StyledButton } from './styled';

const GameBoard = ({ invalidRowIndex }: GameBoardProps) => {
	const [gameRunning, setGameRunning] = useState(false);
	const [currentColorArrangement, setCurrentColorArrangement] = useState<
		string[]
	>([]);

	const heightOfGameBoard =
		document.getElementById('candyListContainer')?.scrollHeight || 0;

	useEffect(() => {
		setCurrentColorArrangement(createBoard());
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			if (
				currentColorArrangement &&
				currentColorArrangement.length > 0 &&
				gameRunning
			) {
				setCurrentColorArrangement([
					...checkForColumn(currentColorArrangement),
				]);
				setCurrentColorArrangement([
					...checkForRow(currentColorArrangement, invalidRowIndex),
				]);
				setCurrentColorArrangement([
					...moveCandyToEmptySpace(currentColorArrangement),
				]);
			}
		}, 100);

		return () => clearInterval(timer);
	}, [gameRunning, currentColorArrangement]);

	return (
		<StyledWrapper>
			{currentColorArrangement && (
				<CandyList listOfCandies={currentColorArrangement} />
			)}
			<StyledButton
				onClick={() => setGameRunning((prevState) => !prevState)}
				heightOfGameBoard={heightOfGameBoard}
			>
				Start Game
			</StyledButton>
		</StyledWrapper>
	);
};

export default GameBoard;
