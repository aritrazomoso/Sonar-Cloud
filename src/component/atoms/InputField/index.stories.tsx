import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconTextField from '.';

const meta: Meta<typeof IconTextField> = {
	title: 'Atoms/IconTextField',
	component: IconTextField,
	tags: ['autodocs'],
	argTypes: {},
};
type Story = StoryObj<typeof IconTextField>;

export const OneIconTextFiled: Story = {
	args: {
		startIcon: <LockIcon />,
	},
};
export const DoubleIconTextFiled: Story = {
	args: {
		startIcon: <LockIcon />,
		endIcon: <VisibilityIcon />,
	},
};

export default meta;
