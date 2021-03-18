import React, { useState, useEffect } from "react";
import axios from 'axios';
import { getAppointmentsForDay, getInterview } from '../helpers/selectors';

import "components/Application.scss";

import DayList from "components/DayList";
import Appointment from "components/Appoinement/index";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers'),
    ]).then(resArr => {
      setState(prev => ({
        ...prev, 
        days: resArr[0].data,
        appointments: resArr[1].data,
        interviewers: resArr[2].data
      }));
    });
  }, []);
  
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const appArr = dailyAppointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);
    
    return <Appointment 
      key={appointment.id} 
      {...appointment} 
      interview={interview}
    />
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
        <DayList
          days={state.days}
          day={state.day}
          setDay={setDay}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {appArr}
      </section>
    </main>
  );
}
