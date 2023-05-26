import { PopoverContext, usePopovercontext } from "./popover.context";
import { popoverStyles } from "./popover.styles";
import { PopoverOptions, usePopover } from "./use-popover.hook";
import { isElement } from "@/utils";
import {
	FloatingFocusManager,
	FloatingPortal,
	useMergeRefs,
} from "@floating-ui/react";
import {
	ComponentPropsWithoutRef,
	HTMLProps,
	ReactNode,
	cloneElement,
	forwardRef,
} from "react";

export type PopoverProps = PopoverOptions & {
	children: ReactNode;
};

const styles = popoverStyles();

export const Popover = ({ children, modal = false, ...rest }: PopoverProps) => {
	const popover = usePopover({ modal, ...rest });

	return (
		<PopoverContext.Provider value={popover}>
			{children}
		</PopoverContext.Provider>
	);
};

type PopoverTriggerProps = {
	children: ReactNode;
};

Popover.Trigger = forwardRef<HTMLElement, PopoverTriggerProps>(
	(props, propRef) => {
		const context = usePopovercontext();
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
		const childrenRef = (props.children as any).ref;
		const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

		if (!isElement(props.children)) {
			throw new Error("Tooltip children must be a single element");
		}

		return cloneElement(
			props.children,
			context.getReferenceProps({
				ref,
				...props,
				...props.children.props,
				"data-state": context.open ? "open" : "closed",
			}),
		);
	},
);

Popover.Trigger.displayName = "Popover.Trigger";

type PopoverDropdownProps = {
	focusManagerProps?: Omit<
		ComponentPropsWithoutRef<typeof FloatingFocusManager>,
		"context" | "children"
	>;
};

Popover.Dropdown = forwardRef<
	HTMLDivElement,
	PopoverDropdownProps & HTMLProps<HTMLDivElement>
>((props, propRef) => {
	const { context: floatingContext, ...context } = usePopovercontext();
	const ref = useMergeRefs([context.refs.setFloating, propRef]);

	if (!floatingContext.open) return null;

	return (
		<FloatingPortal>
			<FloatingFocusManager
				context={floatingContext}
				{...props.focusManagerProps}
			>
				<div
					ref={ref}
					style={{ ...context.floatingStyles, ...props.style }}
					className={styles.dropdown({ className: props.className })}
					aria-labelledby={context.labelId}
					aria-describedby={context.descriptionId}
					{...context.getFloatingProps(props)}
				>
					{props.children}
				</div>
			</FloatingFocusManager>
		</FloatingPortal>
	);
});

Popover.Dropdown.displayName = "Popover.Dropdown";
