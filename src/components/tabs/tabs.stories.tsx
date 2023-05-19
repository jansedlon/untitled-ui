import { Tabs } from "./tabs.component";
import { Meta, StoryObj } from "@storybook/react";
import { Link, MemoryRouter, useParams } from "react-router-dom";
import { Item } from "react-stately";

export default {
	title: "Tabs",
	component: Tabs,
	decorators: [
		// eslint-disable-next-line @typescript-eslint/naming-convention
		(Story) => {
			return (
				<MemoryRouter initialEntries={["/"]}>
					<Story />
				</MemoryRouter>
			);
		},
	],
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;
type ExtractStoryProps<T> = T extends StoryObj<infer P> ? P : never;

function StoryComponent(props: ExtractStoryProps<Story>) {
	const params = useParams<"id">();
	return (
		<div>
			<Tabs tabComponent={Link} {...props} defaultSelectedKey={`/1`}>
				<Item key="/1">Tab 1</Item>
				<Item key="/2">Tab 2</Item>
				<Item key="/3">Tab 3</Item>
			</Tabs>
			{params.id}
		</div>
	);
}

export const Default: Story = {
	render: StoryComponent,
};
