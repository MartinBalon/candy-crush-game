import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { render, cleanup } from '@testing-library/react';
import Candy from 'components/Candy';

afterEach(cleanup);

it('should render correctly', () => {
	const renderer = render(
		<Provider store={store}>
			<Candy candyColor='red' index={1}></Candy>
		</Provider>
	);
	expect(renderer).toMatchSnapshot();
});
