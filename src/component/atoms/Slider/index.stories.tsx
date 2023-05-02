import { Meta, StoryObj } from "@storybook/react";
import SliderComponent from ".";

const meta: Meta<typeof SliderComponent> = {
  title: "Atoms/slider",
  component: SliderComponent,
  argTypes: {
    size: {
      control: "select",
    },
  },
  tags: ["autodocs"],
};
type Story = StoryObj<typeof SliderComponent>;

export const Slider: Story = {};
export const SliderDisabled: Story = {
  args: {
    disabled: true,
  },
};

export default meta;
