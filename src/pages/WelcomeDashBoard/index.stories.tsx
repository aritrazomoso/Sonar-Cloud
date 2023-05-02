import { Meta, StoryObj } from "@storybook/react";
import WelcomeDashBoard from ".";

const meta: Meta<typeof WelcomeDashBoard> = {
  title: "pages/WelcomeDashBoard",
  component: WelcomeDashBoard,
};

type Story = StoryObj<typeof WelcomeDashBoard>;

export const Example: Story = {};

export default meta;
