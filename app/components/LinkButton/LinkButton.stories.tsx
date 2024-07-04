import type { Meta, StoryObj } from "@storybook/react";

import { LinkButton } from "./LinkButton";

type T = typeof LinkButton;

const meta: Meta = {
  title: "button",
  component: LinkButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: <>Button</>,
  },
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
