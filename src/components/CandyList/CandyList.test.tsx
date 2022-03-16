import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CandyList from 'components/CandyList';

afterEach(cleanup);

const mockListOfCandies = ['red', 'green', 'blue'];

it('should render correctly', () => {
	const renderer = render(<CandyList listOfCandies={mockListOfCandies} />);
	expect(renderer).toMatchSnapshot();
});
