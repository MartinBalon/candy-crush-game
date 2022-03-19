import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Candy from 'components/Candy';

afterEach(cleanup);

it('should render correctly', () => {
	const renderer = render(<Candy candyColor='red' index={1}></Candy>);
	expect(renderer).toMatchSnapshot();
});
