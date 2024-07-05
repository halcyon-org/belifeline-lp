import type { Meta, StoryObj } from "@storybook/react";

import { Page3 } from "./Page3";

type T = typeof Page3;

const meta: Meta = {
  title: "Page3",
  component: Page3,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
