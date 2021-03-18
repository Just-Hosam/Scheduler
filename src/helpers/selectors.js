export function getAppointmentsForDay(state, day) {
  const dayObj = state.days.filter(dayObj => dayObj.name === day)[0];
  if (!dayObj) return [];

  return dayObj.appointments.map(appNum => state.appointments[appNum]);
};