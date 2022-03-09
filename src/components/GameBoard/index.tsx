import React, { useEffect, useState } from 'react';
import CandyList from 'components/CandyList';

import { createBoard } from 'utils/createBoard';
import { checkForColumnOfThree } from 'utils/checkForColumnOfThree';
import { Wrapper } from './styled';

const GameBoard = () => {
	const [gameRunning, setGameRunning] = useState(false);
	const [currentColorArrangement, setCurrentColorArrangement] = useState<
		string[]
	>([]);

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

	return (
		<Wrapper>
			{currentColorArrangement && (
				<CandyList listOfCandies={currentColorArrangement} />
			)}
			<div onClick={() => setGameRunning((prevState) => !prevState)}>
				Start Game
			</div>
		</Wrapper>
	);
};

export default GameBoard;
