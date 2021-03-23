import React from 'react';
import {
	getAppointmentsForDay,
	getInterview,
	getInterviewersForDay,
} from '../helpers/selectors';

import 'components/Application.scss';

import DayList from 'components/DayList';
import Appointment from 'components/Appoinement/index';
import useApplicationData from 'hooks/useApplicationData';

export default function Application(props) {
	const {
		state,
		setDay,
		bookInterview,
		deleteInterview,
	} = useApplicationData();

	const dailyInterviewers = getInterviewersForDay(state, state.day);
	const dailyAppointments = getAppointmentsForDay(state, state.day);

	const appArr = dailyAppointments.map((appointment) => {
		const interview = getInterview(state, appointment.interview);

		return (
			<Appointment
				key={appointment.id}
				{...appointment}
				interview={interview}
				interviewers={dailyInterviewers}
				bookInterview={bookInterview}
				deleteInterview={deleteInterview}
			/>
		);
	});
	appArr.push(<Appointment key="last" time="5pm" />);

	return (
		<main className="layout">
			<section className="sidebar">
				<img
					className="sidebar--centered"
					src="images/logo.png"
					alt="Interview Scheduler"
				/>
				<hr className="sidebar__separator sidebar--centered" />
				<nav className="sidebar__menu">
					<DayList days={state.days} day={state.day} setDay={setDay} />
				</nav>
				<img
					className="sidebar__lhl sidebar--centered"
					src="images/lhl.png"
					alt="Lighthouse Labs"
				/>
			</section>
			<section className="schedule">{appArr}</section>
		</main>
	);
}
