import { Avatar } from "../avatar";
import { Indicator } from "./indicator.component";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Indicator",
	component: Indicator,
} satisfies Meta<typeof Indicator>;

type Story = StoryObj<typeof Indicator>;

export const Default: Story = {
	render: (props) => (
		<Indicator {...props}>
			<Avatar src={"https://picsum.photos/200"} />
		</Indicator>
	),
	args: {
		position: "top-start",
		color: "primary",
	},
	argTypes: {
		position: {
			control: "select",
			options: [
				"top-start",
				"top-center",
				"top-end",
				"middle-start",
				"middle-center",
				"middle-end",
				"bottom-start",
				"bottom-center",
				"bottom-end",
			],
		},
		color: {
			control: "radio",
			options: ["primary", "red"],
		},
	},
};
