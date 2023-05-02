import {Meta, StoryObj} from '@storybook/react';
import LeftNavElement from '.';

const meta: Meta<typeof LeftNavElement> = {
	title: 'Molecules/LeftNavElement',
	component: LeftNavElement,
};
type Story = StoryObj<typeof LeftNavElement>;

export const Home: Story = {
	args: {
		name: 'home',
		content: 'Home',
		active: false,
	},
};
export const Cash: Story = {
	args: {
		name: 'coin',
		content: 'Cash Accleration',
		active: false,
	},
};

export default meta;
