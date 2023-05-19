import {
	Placement,
	arrow,
	autoUpdate,
	flip,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useRole,
	useTransitionStyles,
} from "@floating-ui/react";
import { RefObject, useMemo, useState } from "react";

type TooltipOptions = {
	initialOpen?: boolean;
	placement?: Placement;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	arrowRef: RefObject<HTMLElement>;
};

const ARROW_HEIGHT = 7;
const GAP = 10;

export function useTooltip({
	open: controlledOpen,
	onOpenChange: setControlledOpen,
	arrowRef,
	initialOpen = false,
	placement = "top",
}: TooltipOptions) {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);

	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;

	const data = useFloating({
		placement,
		open,
		onOpenChange: setOpen,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(GAP + ARROW_HEIGHT),
			flip(),
			shift({ padding: 5 }),
			arrow({ element: arrowRef }),
		],
	});
	const transition = useTransitionStyles(data.context, {
		duration: 100,
	});

	const context = data.context;

	const hover = useHover(context, {
		move: false,
		enabled: controlledOpen == null,
	});
	const focus = useFocus(context, {
		enabled: controlledOpen == null,
	});
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: "tooltip" });

	const interactions = useInteractions([hover, focus, dismiss, role]);

	return useMemo(
		() => ({
			open,
			setOpen,
			...interactions,
			...data,
			...transition,
		}),
		[open, setOpen, interactions, data, transition],
	);
}
