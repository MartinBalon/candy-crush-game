import React from 'react';
import { PointsCounterProps } from 'types';
import { StyledSpan, StyledWrapper } from './styled';

const PointsCounter = ({ points, heightOfGameBoard }: PointsCounterProps) => {
	return (
		<StyledWrapper heightOfGameBoard={heightOfGameBoard}>
			Points: <StyledSpan>{points}</StyledSpan>
		</StyledWrapper>
	);
};

export default PointsCounter;
