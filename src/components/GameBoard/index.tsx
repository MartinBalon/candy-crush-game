import React, { useEffect, useState } from 'react';
import CandyList from 'components/CandyList';

import { createBoard } from 'utils/createBoard';
import { Wrapper } from './styled';

const GameBoard = () => {
	const [currentColorArrangement, setCurrentColorArrangement] = useState<
		string[]
	>([]);

	useEffect(() => {
		setCurrentColorArrangement(createBoard());
	}, []);

	console.log(currentColorArrangement);
	return (
		<Wrapper>
			{currentColorArrangement && (
				<CandyList listOfCandies={currentColorArrangement} />
			)}
		</Wrapper>
	);
};

export default GameBoard;
