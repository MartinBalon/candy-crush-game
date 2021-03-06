import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { onCandyBeingDropped } from 'store/candySlice';

import CandyList from 'components/CandyList';

import { createBoard } from 'utils/createBoard';
import { checkForColumn } from 'utils/checkForColumn';
import { checkForRow } from 'utils/checkForRow';
import { moveCandyToEmptySpace } from 'utils/moveCandyToEmptySpace';

import { GameBoardProps } from 'types';
import { StyledWrapper, StyledButton } from './styled';
import { switchCandyPosition } from 'utils/switchCandyPosition';
import PointsCounter from 'components/PointsCounter';

const GameBoard = ({ invalidRowIndex }: GameBoardProps) => {
	const dispatch = useDispatch();
	const [gameIsRunning, setGameIsRunning] = useState(false);
	const [points, setPoints] = useState(0);
	const [currentColorArrangement, setCurrentColorArrangement] = useState<
		string[]
	>([]);

	const { score } = useSelector((state: RootState) => state.score);
	const candiesBeingReplaced = useSelector((state: RootState) => state.candy);
	const { candyBeingDraggedId } = candiesBeingReplaced;
	const { candyBeingReplacedId } = candiesBeingReplaced;
	const { candyBeingDropped } = candiesBeingReplaced;

	const heightOfGameBoard =
		document.getElementById('candyListContainer')?.scrollHeight || 0;

	useEffect(() => {
		setCurrentColorArrangement(createBoard());
	}, []);

	useEffect(() => {
		setPoints(score);
	}, [score]);

	useEffect(() => {
		// react to a player moving a candy
		if (candyBeingDropped && gameIsRunning) {
			setCurrentColorArrangement([
				...switchCandyPosition(
					candyBeingDraggedId,
					candyBeingReplacedId,
					currentColorArrangement
				),
			]);
			dispatch(onCandyBeingDropped(false));
		}
	}, [candiesBeingReplaced, gameIsRunning]);

	useEffect(() => {
		const timer = setInterval(() => {
			if (
				currentColorArrangement &&
				currentColorArrangement.length > 0 &&
				gameIsRunning
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
	}, [gameIsRunning, currentColorArrangement]);

	return (
		<StyledWrapper>
			<PointsCounter points={points} heightOfGameBoard={heightOfGameBoard} />
			{currentColorArrangement && (
				<CandyList listOfCandies={currentColorArrangement} />
			)}
			{!gameIsRunning && (
				<StyledButton
					onClick={() => setGameIsRunning((prevState) => !prevState)}
					heightOfGameBoard={heightOfGameBoard}
				>
					Start Game
				</StyledButton>
			)}
		</StyledWrapper>
	);
};

export default GameBoard;
