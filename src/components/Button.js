import React from 'react';
import classNames from 'classnames';

// Import Styling
import 'components/Button.scss';

export default function Button(props) {
	// Assign the approppriate class based on the passed prop
	const htmlClass = classNames(
		'button',
		{ 'button--confirm': props.confirm },
		{ 'button--danger': props.danger }
	);

	return (
		<button
			className={htmlClass}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
}
