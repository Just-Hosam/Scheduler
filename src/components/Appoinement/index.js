import React from 'react';

import 'components/Appoinement/styles.scss';

// Components import
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

// Form modes
import useVisualMode from '../../hooks/useVisualMode';
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = 'ERROR_SAVE';
const ERROR_DELETE = 'ERROR_DELETE';

const Appointment = props => {
  const { mode, transition, back } = useVisualMode((props.interview) ? SHOW : EMPTY);

  function save(name, interviewer, isNew) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    props.bookInterview(props.id, interview, isNew)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));
  }

  function confirm() {
    transition(DELETING, true);
    props.deleteInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  }

  const saveClose = () => {
    back();
    transition(EDIT, true);
  }
  
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE &&
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
          isNew={true}
        />}
      {mode === CONFIRM && 
        <Confirm
          message='Are you sure?'
          onConfirm={confirm}
          onCancel={back}
        />
      }
      {mode === EDIT &&
        <Form
          name={props.interview.student}
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id}
          onCancel={() => back()}
          onSave={save}
          isNew={false}
        />}
      {mode === DELETING && <Status message='Deleting!' /> }
      {mode === ERROR_DELETE &&
        <Error
          message='Error Deleting!'
          onClose={back}
        />
      }
      {mode === SAVING && <Status message='Saving!' /> }
      {mode === ERROR_SAVE &&
        <Error
          message='Error Saving!'
          onClose={saveClose}
        />
      }
      {mode === SHOW && 
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      }
    </article>
  );
};

export default Appointment;