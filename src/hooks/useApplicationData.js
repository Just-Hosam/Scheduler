import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
	const [state, setState] = useState({
		day: 'Monday',
		days: [],
		appointments: {},
		interviewers: {},
	});

	const setDay = (day) => setState({ ...state, day });

	useEffect(() => {
		Promise.all([
			axios.get('/api/days'),
			axios.get('/api/appointments'),
			axios.get('/api/interviewers'),
		]).then((resArr) => {
			setState((prev) => ({
				...prev,
				days: resArr[0].data,
				appointments: resArr[1].data,
				interviewers: resArr[2].data,
			}));
		});
	}, []);

	function accessDaySpots(day, action) {
		const dayObj = { ...state.days.filter((dayObj) => dayObj.name === day)[0] };
		dayObj.spots -= action;
		return state.days.map((elem) => (elem.id === dayObj.id ? dayObj : elem));
	}

	function bookInterview(id, interview, isNew) {
		const appointment = {
			...state.appointments[id],
			interview: { ...interview },
		};
		const appointments = { ...state.appointments, [id]: appointment };

		return axios.put(`/api/appointments/${id}`, { ...appointment }).then(() => {
			const days = accessDaySpots(state.day, isNew ? +1 : 0);
			setState({ ...state, appointments, days });
		});
	}

	function deleteInterview(id) {
		const appointment = { ...state.appointments[id], interview: null };
		const appointments = { ...state.appointments, [id]: appointment };

		return axios.delete(`/api/appointments/${id}`).then(() => {
			const days = accessDaySpots(state.day, -1);
			setState({ ...state, appointments, days });
		});
	}

	return {
		state,
		setDay,
		bookInterview,
		deleteInterview,
	};
}
