import type { Meta } from "@storybook/react";

import { Label } from ".";

const meta = {
  title: "Example/label",
  component: Label,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Label>;

export default meta;

export const Default = {
  args: {
    children: "Label",
  },
};
