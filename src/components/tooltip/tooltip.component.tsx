import { FloatingPortal, Placement, useMergeRefs } from "@floating-ui/react";
import clsx from "clsx";
import { ReactNode, cloneElement, forwardRef } from "react";

import { useTooltip } from "./use-tooltip";
import { isElement } from "@/utils";

type TooltipProps = {
	children: ReactNode;
	variant?: "light" | "dark";
	title?: string;
	description?: string;
	initialOpen?: boolean;
	placement?: Placement;
	open?: boolean;
	width?: string | number;
	onOpenChange?: (open: boolean) => void;
};

export const Tooltip = forwardRef<HTMLElement, TooltipProps>(
	(
		{
			children,
			title,
			description,
			initialOpen,
			onOpenChange,
			variant = "light",
			width = "auto",
			...props
		},
		propRef,
	) => {
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
		const childrenRef = (children as any).ref;
		const tooltip = useTooltip({
			...props,
			initialOpen,
			onOpenChange,
		});
		const context = tooltip.context;

		const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);
		const floatingRef = useMergeRefs([context.refs.setFloating, propRef]);

		if (!isElement(children)) {
			throw new Error("Tooltip children must be a single element");
		}

		return (
			<>
				{cloneElement(
					children,
					tooltip.getReferenceProps({
						ref,
						...props,
						...children.props,
						"data-state": context.open ? "open" : "closed",
					}),
				)}
				{tooltip.open && (
					<FloatingPortal>
						<div
							ref={floatingRef}
							style={{
								position: context.strategy,
								top: context.y ?? 0,
								left: context.x ?? 0,
								width,
								...tooltip.styles,
							}}
							{...tooltip.getFloatingProps()}
							className={clsx(
								"pointer-events-none z-50 rounded-lg border border-solid border-slate-100 px-3 py-2 text-xs font-semibold shadow-[0_12px_16px_-4px_rgba(16,25,50,0.08),0_4px_6px_-2px_rgba(16,24,40,0.03)]",
								variant === "light" &&
									"border-slate-100 bg-white text-slate-700",
								variant === "dark" &&
									"border-slate-900 bg-slate-900 text-white",
							)}
						>
							<div className="flex flex-col space-y-1">
								{title && <span>{title}</span>}
								{description && (
									<span
										className={clsx(
											variant === "dark" ? "text-white" : "text-slate-500",
										)}
									>
										{description}
									</span>
								)}
							</div>
						</div>
					</FloatingPortal>
				)}
			</>
		);
	},
);
