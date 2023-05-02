import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import TextButton from '.';
import {ThemeProvider} from '@mui/material';
import theme from '../../../themes';

const meta: Meta<typeof TextButton> = {
	title: 'Atoms/TextButton',
	component: TextButton,
	argTypes: {
		variant: {
			control: 'select',
		},
		size: {
			control: 'select',
		},
		color: {
			control: 'select',
		},
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextButton>;

export const Primary: Story = {
	render: (args) => (
		<ThemeProvider theme={theme}>
			<TextButton {...args} />
		</ThemeProvider>
	),
	args: {
		label: 'Primary',
		variant: 'contained',
	},
	tags: ['autodocs'],
};
