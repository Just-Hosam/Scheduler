import { useState } from 'react';

export default function useVisualMode(initial) {
	const [mode, setMode] = useState(initial);
	// eslint-disable-next-line
	const [history, setHistory] = useState([initial]);

	const transition = (newMode, replace = false) => {
		// TODO: bad practice
		if (replace) history.pop();
		setMode(newMode);
		history.push(newMode);
	};

	const back = () => {
		// TODO: bad practice
		if (mode === initial) return;
		history.pop();
		setMode(history.slice(-1)[0]);
	};

	return {
		mode,
		transition,
		back,
	};
}
