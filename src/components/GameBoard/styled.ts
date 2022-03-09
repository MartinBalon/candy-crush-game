import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

type ButtonProps = {
	heightOfGameBoard: number;
};

export const Button = styled.button<ButtonProps>`
	background-color: red;
	color: white;
	border: none;
	border-radius: 5px;
	font-weight: bold;
	padding: 0.6rem 3rem;
	font-size: 1.2rem;
	position: absolute;
	top: 50%;
	margin-top: ${(props) => props.heightOfGameBoard / 2 + 40}px;
`;
