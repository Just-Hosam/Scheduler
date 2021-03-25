import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Import Styling
import 'index.scss';

// Import Components
import Button from 'components/Button';
import DayListItem from 'components/DayListItem';
import DayList from 'components/DayList';
import InterviewerListItem from 'components/InterviewerListItem';
import InterviewerList from 'components/InterviewerList';
import Appointment from 'components/Appoinement/index';
import Header from 'components/Appoinement/Header';
import Empty from 'components/Appoinement/Empty';
import Show from 'components/Appoinement/Show';
import Confirm from 'components/Appoinement/Confirm';
import Status from 'components/Appoinement/Status';
import Error from 'components/Appoinement/Error';
import Form from 'components/Appoinement/Form';

// Data used for rendering
const days = [
	{
		id: 1,
		name: 'Monday',
		spots: 2,
	},
	{
		id: 2,
		name: 'Tuesday',
		spots: 5,
	},
	{
		id: 3,
		name: 'Wednesday',
		spots: 0,
	},
];

const interviewer = {
	id: 1,
	name: 'Sylvia Palmer',
	avatar: 'https://i.imgur.com/LpaY82x.png',
};

const interviewers = [
	{ id: 1, name: 'Sylvia Palmer', avatar: 'https://i.imgur.com/LpaY82x.png' },
	{ id: 2, name: 'Tori Malcolm', avatar: 'https://i.imgur.com/Nmx0Qxo.png' },
	{ id: 3, name: 'Mildred Nazir', avatar: 'https://i.imgur.com/T2WwVfS.png' },
	{ id: 4, name: 'Cohana Roy', avatar: 'https://i.imgur.com/FK8V841.jpg' },
	{ id: 5, name: 'Sven Jones', avatar: 'https://i.imgur.com/twYrpay.jpg' },
];

storiesOf('Button', module)
	.addParameters({
		backgrounds: [{ name: 'dark', value: '#222f3e', default: true }],
	})
	.add('Base', () => <Button>Base</Button>)
	.add('Confirm', () => <Button confirm>Confirm</Button>)
	.add('Danger', () => <Button danger>Cancel</Button>)
	.add('Clickable', () => (
		<Button onClick={action('button-clicked')}>Clickable</Button>
	))
	.add('Disabled', () => (
		<Button disabled onClick={action('button-clicked')}>
			Disabled
		</Button>
	));

storiesOf('DayListItem', module)
	.addParameters({
		backgrounds: [{ name: 'dark', value: '#222f3e', default: true }],
	})
	.add('Unselected', () => <DayListItem name="Monday" spots={5} />)
	.add('Selected', () => <DayListItem name="Monday" spots={5} selected />)
	.add('Full', () => <DayListItem name="Monday" spots={0} />)
	.add('Clickable', () => (
		<DayListItem name="Tuesday" setDay={action('setDay')} spots={5} />
	));

storiesOf('DayList', module)
	.addParameters({
		backgrounds: [{ name: 'dark', value: '#222f3e', default: true }],
	})
	.add('Monday', () => (
		<DayList days={days} day={'Monday'} setDay={action('setDay')} />
	))
	.add('Tuesday', () => (
		<DayList days={days} day={'Tuesday'} setDay={action('setDay')} />
	));

storiesOf('InterviewerListItem', module)
	.addParameters({
		backgrounds: [{ name: 'dark', value: '#222f3e', default: true }],
	})
	.add('Unselected', () => (
		<InterviewerListItem
			id={interviewer.id}
			name={interviewer.name}
			avatar={interviewer.avatar}
		/>
	))
	.add('Selected', () => (
		<InterviewerListItem
			id={interviewer.id}
			name={interviewer.name}
			avatar={interviewer.avatar}
			selected
		/>
	))
	.add('Clickable', () => (
		<InterviewerListItem
			id={interviewer.id}
			name={interviewer.name}
			avatar={interviewer.avatar}
			setInterviewer={(event) => action('setInterviewer')(interviewer.id)}
		/>
	));

storiesOf('InterviewerList', module)
	.addParameters({
		backgrounds: [{ name: 'dark', value: '#222f3e', default: true }],
	})
	.add('Initial', () => (
		<InterviewerList
			interviewers={interviewers}
			onChange={action('onChange')}
		/>
	))
	.add('Preselected', () => (
		<InterviewerList
			interviewers={interviewers}
			value={3}
			onChange={action('onChange')}
		/>
	));

storiesOf('Appointment', module)
	.addParameters({
		backgrounds: [{ name: 'white', value: '#fff', default: true }],
	})
	.add('Appointment', () => <Appointment />)
	.add('Appointment with Time', () => <Appointment time="12pm" />)
	.add('Header', () => <Header time="12pm" />)
	.add('Empty', () => <Empty onAdd={action('onAdd')} />)
	.add('Show', () => {
		return (
			<Show
				student="Hosam Dahrooge"
				interviewer={interviewers[0]}
				onEdit={action('onEdit')}
				onDelete={action('onDelete')}
			/>
		);
	})
	.add('Confirm', () => {
		return (
			<Confirm
				message="Are you sure?"
				onCancel={action('onCancel')}
				onConfirm={action('onConfirm')}
			/>
		);
	})
	.add('Status', () => <Status message="Loading" />)
	.add('Error', () => (
		<Error message="Could not delete." onClose={action('onClose')} />
	))
	.add('Form on Create', () => {
		return (
			<Form
				interviewers={interviewers}
				onSave={action('onSave')}
				onCancel={action('onCancel')}
			/>
		);
	})
	.add('Form on Edit', () => {
		return (
			<Form
				interviewers={interviewers}
				onSave={action('onSave')}
				onCancel={action('onCancel')}
				name="Hosam Dahrooge"
				interviewer={4}
			/>
		);
	})
	.add('Appointment Empty', () => {
		return (
			<Fragment>
				<Appointment id={1} time="12pm" />
				<Appointment id="last" time="1pm" />
			</Fragment>
		);
	})
	.add('Appointment Booked', () => {
		return (
			<Fragment>
				<Appointment
					id={1}
					time="12pm"
					interview={{ student: 'Hosam Dahrooge', interviewer }}
				/>
				<Appointment id="last" time="1pm" />
			</Fragment>
		);
	});
