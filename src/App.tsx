import React from 'react';

import GameBoard from 'components/GameBoard';
import { createInvalidRowIndexes } from 'utils/createInvalidRowIndexes';
import { gameOptions } from 'utils/gameOptions';

const App = () => {
	const invalidRowIndex = createInvalidRowIndexes(
		gameOptions.width,
		gameOptions.height
	);

	return <GameBoard invalidRowIndex={invalidRowIndex} />;
};

export default App;
