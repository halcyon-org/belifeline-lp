import type { Meta, StoryObj } from "@storybook/react";

import { Loading } from "./Loading";

type T = typeof Loading;

const meta: Meta = {
  title: "Loading",
  component: Loading,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
