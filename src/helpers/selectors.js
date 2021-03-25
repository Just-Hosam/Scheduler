// Returns an array with the appopintments for a given day
export function getAppointmentsForDay(state, day) {
	const dayObj = state.days.filter((dayObj) => dayObj.name === day)[0];
	if (!dayObj) return [];

	return dayObj.appointments.map((appNum) => state.appointments[appNum]);
}

// Return an object with the specific interview data
export function getInterview(state, interview) {
	if (!interview) return null;
	const interviewerId = interview.interviewer;
	const interviewerData = state.interviewers[interviewerId];

	return { ...interview, interviewer: interviewerData };
}

// Returns an array with the appopintments for a given day
export function getInterviewersForDay(state, day) {
	const dayObj = state.days.filter((dayObj) => dayObj.name === day)[0];
	if (!dayObj) return [];

	return dayObj.interviewers.map((appNum) => state.interviewers[appNum]);
}
