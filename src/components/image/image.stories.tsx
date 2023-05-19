import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "./image.component";

export default {
	title: "Image",
	component: Image,
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
	args: {
		src: "https://picsum.photos/400",
		width: 400,
	},
};

export const WithPlaceholder: Story = {
	args: {
		src: "https://picsum.photos",
		withPlaceholder: true,
		width: 400,
		height: 400,
	},
};
