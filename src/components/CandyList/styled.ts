import styled from 'styled-components';

const width = 35;
const height = 35;

export const CandyListContainer = styled.div`
	width: ${width}rem;
	height: ${height}rem;
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	top: 50%;
	margin-top: -${width / 2}rem;
`;
