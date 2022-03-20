import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { render, cleanup } from '@testing-library/react';
import CandyList from 'components/CandyList';

afterEach(cleanup);

const mockListOfCandies = ['red', 'green', 'blue'];

it('should render correctly', () => {
	const renderer = render(
		<Provider store={store}>
			<CandyList listOfCandies={mockListOfCandies} />
		</Provider>
	);
	expect(renderer).toMatchSnapshot();
});
