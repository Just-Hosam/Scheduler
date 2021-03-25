import React from 'react';
import PropTypes from 'prop-types';

// Import Styling
import 'components/InterviewerList.scss';

// Import Components
import InterviewerListItem from 'components/InterviewerListItem';

const InterviewerList = (props) => {
	const itemsArr = props.interviewers.map((interviewer) => {
		return (
			<InterviewerListItem
				key={interviewer.id}
				id={interviewer.id}
				name={interviewer.name}
				avatar={interviewer.avatar}
				setInterviewer={(event) => props.onChange(interviewer.id)}
				selected={props.value === interviewer.id}
			/>
		);
	});

	return (
		<section className="interviewers">
			<h4 className="interviewers__header text--light">Interviewer</h4>
			<ul className="interviewers__list">{itemsArr}</ul>
		</section>
	);
};

// Checks if the interviewers is an array before exporting
InterviewerList.propTypes = {
	interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
