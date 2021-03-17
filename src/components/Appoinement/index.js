import React from 'react';

import 'components/Appoinement/styles.scss';
// Import the Header, Show and Empty components into Appointment/index.js.
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

const Appointment = props => {
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer}/> : <Empty />}
    </article>
  );
};

export default Appointment;