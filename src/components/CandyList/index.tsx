import React from 'react';
import Candy from 'components/Candy';
import { CandyListContainer } from './styled';
import { CandyListProps } from 'types';

const CandyList = (props: CandyListProps) => {
	return (
		<CandyListContainer>
			{props.listOfCandies.map((candyColor, index) => (
				<Candy key={index} candyColor={candyColor} />
			))}
		</CandyListContainer>
	);
};

export default CandyList;
