import { tabStyle, tabsStyle } from "./tabs.styles";
import { PolymorphicComponentProps } from "@/utils";
import * as RadixTabs from "@radix-ui/react-tabs";
import { ElementType } from "react";

export type TabsProps = RadixTabs.TabsProps;

const tabsClassName = tabsStyle();

export function Tabs({ children, ...props }: TabsProps) {
	return <RadixTabs.Root {...props}>{children}</RadixTabs.Root>;
}

Tabs.List = function TabsList(props: RadixTabs.TabsListProps) {
	return <RadixTabs.List {...props} className={tabsClassName} />;
};

Tabs.Tab = <TElement extends ElementType>({
	component,
	children,
	...props
}: PolymorphicComponentProps<TElement, RadixTabs.TabsTriggerProps>) => {
	const Component = component ?? "button";
	return (
		<RadixTabs.Trigger asChild={!!component} {...props} className={tabStyle()}>
			{component ? <Component>{children}</Component> : children}
		</RadixTabs.Trigger>
	);
};
