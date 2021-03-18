import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';

import 'components/Appoinement/styles.scss';
// Import the Header, Show and Empty components into Appointment/index.js.
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

const Appointment = props => {
  const { mode, transition, back } = useVisualMode((props.interview) ? SHOW : EMPTY);

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE &&
        <Form 
          interviewers={[]}
          onCancel={() => back()}  
        />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
    </article>
  );
};

export default Appointment;