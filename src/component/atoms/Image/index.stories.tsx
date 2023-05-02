import { Meta, StoryObj } from "@storybook/react";
import ImageComponent from ".";

const meta: Meta<typeof ImageComponent> = {
  title: "Atoms/Image",
  component: ImageComponent,
  tags: ["autodocs"],
};
type Story = StoryObj<typeof ImageComponent>;

export const BasicImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    height: 200,
    width: 200,
    alt: "Basic Book Exaple",
  },
};

export default meta;
