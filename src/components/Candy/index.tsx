import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	onCandyBeingDragged,
	onCandyBeingReplaced,
	onCandyBeingDropped,
} from 'store/candySlice';
import { CandyProps } from 'types';

const Candy = ({ candyColor, index }: CandyProps) => {
	const dispatch = useDispatch();
	const [image, setImage] = useState<string | null>(null);

	useEffect(() => {
		if (candyColor) {
			import(`./img/${candyColor}Candy.jpg`).then((image) =>
				setImage(image.default)
			);
		}
	}, [candyColor]);

	return (
		<>
			{image && (
				<img
					src={image}
					style={{
						background: candyColor,
						width: '4.375rem',
						height: '4.375rem',
					}}
					data-id={index}
					alt={candyColor}
					draggable={true}
					onDragStart={() => dispatch(onCandyBeingDragged(index))}
					onDragOver={(event) => event.preventDefault()}
					onDragEnter={(event) => event.preventDefault()}
					onDragLeave={(event) => event.preventDefault()}
					onDrop={() => dispatch(onCandyBeingReplaced(index))}
					onDragEnd={() => dispatch(onCandyBeingDropped(true))}
				/>
			)}
		</>
	);
};

export default Candy;
