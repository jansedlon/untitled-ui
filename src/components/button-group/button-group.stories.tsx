import { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./button-group.component";
import { Button } from "../button";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 1</Button>
        <Button>Button 1</Button>
      </>
    ),
  },
};
