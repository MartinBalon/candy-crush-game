import React from 'react';
import { CandyWrapper } from './styled';
import { CandyProps } from 'types';

const Candy = (props: CandyProps) => {
	return (
		<CandyWrapper style={{ background: props.candyColor }}>
			{props.candyColor}
		</CandyWrapper>
	);
};

export default Candy;
