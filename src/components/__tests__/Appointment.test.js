import React from 'react';

import { render } from '@testing-library/react';

import Appointment from 'components/Appoinement';

describe('Tests for the Appointment component', () => {
	it('renders without crashing', () => {
		render(<Appointment />);
	});
});
