import React from 'react';
import { useDispatch } from 'react-redux';
import { onCandyBeingDragged, onCandyBeingReplaced } from 'store';

import { onDragEnd } from 'utils/dragCandy';
import { CandyProps } from 'types';

const Candy = ({ candyColor, index }: CandyProps) => {
	const dispatch = useDispatch();

	return (
		<img
			style={{ background: candyColor, width: '4.375rem', height: '4.375rem' }}
			data-id={index}
			alt={candyColor}
			draggable={true}
			onDragStart={() => dispatch(onCandyBeingDragged(index))}
			onDragOver={(event) => event.preventDefault()}
			onDragEnter={(event) => event.preventDefault()}
			onDragLeave={(event) => event.preventDefault()}
			onDrop={() => dispatch(onCandyBeingReplaced(index))}
			onDragEnd={onDragEnd}
		/>
	);
};

export default Candy;
