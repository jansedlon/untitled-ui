import { Avatar } from "./avatar.component";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Avatar",
	component: Avatar,
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	args: {
		size: "sm",
		src: "https://picsum.photos/200",
	},
	argTypes: {
		size: {
			control: "radio",
			options: ["sm", "md", "lg", "xl", "2xl"],
		},
	},
};

export const Fallback: Story = {
	args: {
		size: "sm",
		src: null,
	},
};

export const TextFallback: Story = {
	args: {
		size: "sm",
		src: null,
		children: "JD",
	},
};
