import React, { useEffect, useState } from 'react';
import CandyList from 'components/CandyList';

import { createBoard } from 'utils/createBoard';
import { checkForColumnOfThree } from 'utils/checkForColumnOfThree';
import { Wrapper, Button } from './styled';

const GameBoard = () => {
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
					...checkForColumnOfThree(currentColorArrangement),
				]);
			}
		}, 100);

		return () => clearInterval(timer);
	}, [gameRunning]);
	console.log(heightOfGameBoard);
	return (
		<Wrapper>
			{currentColorArrangement && (
				<CandyList listOfCandies={currentColorArrangement} />
			)}
			<Button
				onClick={() => setGameRunning((prevState) => !prevState)}
				heightOfGameBoard={heightOfGameBoard}
			>
				Start Game
			</Button>
		</Wrapper>
	);
};

export default GameBoard;
