import { Meta, StoryObj } from "@storybook/react";
import IconComponent from ".";

const meta: Meta<typeof IconComponent> = {
  title: "Atoms/icon",
  component: IconComponent,
  tags: ["autodocs"],
};
type Story = StoryObj<typeof IconComponent>;

export const GoogleIcon: Story = {
  args: {
    name: "google",
  },
};
export const StripeIcon: Story = {
  args: {
    name: "stripe",
  },
};
export const XeroIcon: Story = {
  args: {
    name: "xero",
  },
};

export default meta;
