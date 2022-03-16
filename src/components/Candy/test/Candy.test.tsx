import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Candy from 'components/Candy';

afterEach(cleanup);

it('should render correctly', () => {
	const renderer = render(<Candy candyColor='red'></Candy>);
	expect(renderer).toMatchSnapshot();
});
