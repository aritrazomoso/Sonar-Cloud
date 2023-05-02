import {Meta, StoryObj} from '@storybook/react';
import LogoWithBackground from '.';

const meta: Meta<typeof LogoWithBackground> = {
	title: 'Molecules/LogoWithBackground',
	component: LogoWithBackground,
};
type Story = StoryObj<typeof LogoWithBackground>;

export const Calender: Story = {
	args: {
		name: 'calender',
	},
};
export const DocumentDownload: Story = {
	args: {
		name: 'documentDownload',
	},
};

export default meta;
