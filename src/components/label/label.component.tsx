import { PolymorphicComponentProps, PolymorphicRef } from "@/utils";
import * as RadixLabel from "@radix-ui/react-label";
import { ElementType, forwardRef } from "react";
import { tv } from "tailwind-variants";

const label = tv({
	base: "block text-sm font-medium leading-5 text-slate-700",
});

export const Label = forwardRef(
	<TElement extends ElementType>(
		{
			children,
			className,
			component,
			...props
		}: PolymorphicComponentProps<TElement>,
		ref: PolymorphicRef<TElement>,
	) => {
		const Component = component || RadixLabel.Root;

		return (
			<Component className={label({ className })} {...props} ref={ref}>
				{children}
			</Component>
		);
	},
);

Label.displayName = "Label";
