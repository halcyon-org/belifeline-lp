import type { Meta, StoryObj } from "@storybook/react";

import { Page1 } from "./Page1";

type T = typeof Page1;

const meta: Meta = {
  title: "Page1",
  component: Page1,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
