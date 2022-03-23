import styled from 'styled-components';
import { StyledWrapperProps } from 'types';
import { theme } from 'themes';

export const StyledWrapper = styled.div<StyledWrapperProps>`
	position: absolute;
	top: 50%;
	font-size: 1.5rem;
	font-weight: bold;
	color: ${theme.primaryFontColor};
	padding: 0.4rem 2rem;
	border-radius: ${theme.borderRadius};
	box-shadow: ${theme.boxshadow};
	margin-top: -${(props) => props.heightOfGameBoard / 2 + 60}px;
`;

export const StyledSpan = styled.span`
	color: ${theme.primaryFontColorLight};
`;
