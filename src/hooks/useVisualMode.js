import { useState } from 'react';

export default function useVisualMode(initial) {
	const [mode, setMode] = useState(initial);
	const [history, setHistory] = useState([initial]);

	const transition = (newMode, replace = false) => {
		setMode(newMode);
		setHistory((prev) => {
			if (replace) {
				const copy = [...prev];
				copy.pop();
				return [...copy, newMode];
			}
			return [...prev, newMode];
		});
	};

	const back = () => {
		if (mode === initial) return;
		setHistory((prev) => {
			const copy = [...prev];
			copy.pop();
			setMode(copy.slice(-1)[0]);
			return [...copy];
		});
	};

	return {
		mode,
		history,
		transition,
		back,
	};
}
