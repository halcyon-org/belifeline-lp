import type { Meta, StoryObj } from "@storybook/react";

import { Hero } from "./Hero";

type T = typeof Hero;

const meta: Meta = {
  title: "Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
