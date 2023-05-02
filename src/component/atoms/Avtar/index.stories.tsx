import {Meta, StoryObj} from '@storybook/react';
import AvtarComponent from '.';

const meta: Meta<typeof AvtarComponent> = {
	title: 'Atoms/avtar',
	component: AvtarComponent,
	tags: ['autodocs'],
};
type Story = StoryObj<typeof AvtarComponent>;

export const AvtarWithPic: Story = {
	args: {
		variant: 'circular',
		src: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
		alt: 'Avtar Photo',
		height: '24px',
		width: '24px',
	},
};

export const AvtarWithOutPic: Story = {
	args: {
		variant: 'circular',
		alt: 'Avtar Photo',
		height: '24px',
		width: '24px',
	},
};

export default meta;
