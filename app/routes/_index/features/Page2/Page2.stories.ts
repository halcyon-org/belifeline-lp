import type { Meta, StoryObj } from "@storybook/react";

import { Page2 } from "./Page2";

type T = typeof Page2;

const meta: Meta = {
  title: "Page2",
  component: Page2,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
