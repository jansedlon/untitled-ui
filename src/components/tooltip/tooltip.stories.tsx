import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";

import { Tooltip } from "./tooltip.component";

export default {
  title: "Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (props) => (
    <Tooltip {...props}>
      <Button>Button</Button>
    </Tooltip>
  ),
  args: {
    initialOpen: false,
    variant: "light",
    title: "This is a tooltip",
    description:
      "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text.",
  },
  argTypes: {
    variant: {
      type: {
        name: "enum",
        value: ["light", "dark"],
      },
    },
  },
};
