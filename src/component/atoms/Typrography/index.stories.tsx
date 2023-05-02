import {Meta, StoryObj} from '@storybook/react';
import TypographyComponent from '.';

const meta: Meta<typeof TypographyComponent> = {
	title: 'atoms/Typography',
	component: TypographyComponent,
	argTypes: {
		varient: {
			control: 'select',
		},
	},
	tags: ['autodocs'],
};

type Story = StoryObj<typeof TypographyComponent>;

export const Example: Story = {
	args: {
		children: 'Hi From Example',
		varient: 'heading1',
	},
};

export default meta;
