import React from 'react';
import { StyledCandyWrapper } from './styled';
import { CandyProps } from 'types';

const Candy = (props: CandyProps) => {
	return (
		<StyledCandyWrapper style={{ background: props.candyColor }}>
			{props.candyColor}
		</StyledCandyWrapper>
	);
};

export default Candy;
