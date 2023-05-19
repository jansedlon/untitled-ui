import { Stack } from "../stack";
import { RadioGroup } from "./radio-group.component";
import { Radio } from "./radio.component";
import { Meta, StoryObj } from "@storybook/react";

export default {
	component: RadioGroup,
	title: "Radio",
} satisfies Meta<typeof RadioGroup>;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
	render: () => (
		<RadioGroup label="Label">
			<Stack spacing="xs">
				<Radio value="1" label="Item 1" />
				<Radio value="2" label="Item 2" />
				<Radio value="3" label="Item 3" />
			</Stack>
		</RadioGroup>
	),
};
