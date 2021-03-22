import React from 'react';
import InterviewerListItem from "components/InterviewerListItem";
import PropTypes from 'prop-types';

import "components/InterviewerList.scss";

const InterviewerList = props => {
  const itemsArr = props.interviewers.map(interviewer => {
    return <InterviewerListItem
      key = {interviewer.id}
      id = {interviewer.id}
      name = {interviewer.name}
      avatar = {interviewer.avatar}
      setInterviewer = {event => props.onChange(interviewer.id)}
      selected = {props.value === interviewer.id}
    />
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {itemsArr}
      </ul>
    </section>
  );
};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;