import React from 'react';
import Candy from 'components/Candy';
import { StyledCandyListContainer } from './styled';
import { CandyListProps } from 'types';

const CandyList = (props: CandyListProps) => {
	return (
		<StyledCandyListContainer id='candyListContainer'>
			{props.listOfCandies.map((candyColor, index) => (
				<Candy key={index} candyColor={candyColor} />
			))}
		</StyledCandyListContainer>
	);
};

export default CandyList;
