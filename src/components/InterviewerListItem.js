import React from 'react';
import classNames from 'classnames';

import "components/InterviewerListItem.scss";

const InterviewerListItem = props => {
  const listClasses = classNames(
    "interviewers__item",
    { "interviewers__item--selected": props.selected }
  );

  const imgClasses = classNames(
    "interviewers__item-image",
    { "interviewers__item-image--selected": props.selected }
  );

  return (
    <li 
      className={listClasses}
      key={props.id}
      onClick={props.setInterviewer}
    >
      <img
        className={imgClasses}
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};

export default InterviewerListItem;