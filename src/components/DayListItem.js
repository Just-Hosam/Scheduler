import React from 'react';
import classNames from 'classnames';

// Import Styling
import 'components/DayListItem.scss';

export default function DayListItem(props) {
	// Assign the approppriate class based on the passed prop
	const classes = classNames(
		'day-list__item',
		{ 'day-list__item--selected': props.selected },
		{ 'day-list__item--full': props.spots === 0 }
	);

	return (
		<li
			onClick={() => props.setDay(props.name)}
			className={classes}
			data-testid="day"
		>
			<h2 className="text--regular">{props.name}</h2>
			<h3 className="text--light">{formatSpots(props.spots)}</h3>
		</li>
	);
}

// Helper function to format the 'spots' string
const formatSpots = (spots) => {
	if (spots === 0) spots = 'no spots remaining';
	if (spots === 1) spots = '1 spot remaining';
	if (spots > 1) spots += ' spots remaining';

	return spots;
};
