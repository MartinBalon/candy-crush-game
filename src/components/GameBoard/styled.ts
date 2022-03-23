import styled from 'styled-components';
import { StyledButtonProps } from 'types';
import { theme } from 'themes';

export const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledButton = styled.button<StyledButtonProps>`
	background-color: red;
	color: ${theme.secondaryFontColor};
	border: none;
	border-radius: ${theme.borderRadius};
	box-shadow: ${theme.boxshadow};
	font-weight: bold;
	padding: 0.6rem 3rem;
	font-size: 1.2rem;
	position: absolute;
	top: 50%;
	margin-top: ${(props) => props.heightOfGameBoard / 2 + 40}px;
`;
