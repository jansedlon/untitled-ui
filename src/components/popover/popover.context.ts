import { usePopover } from "./use-popover.hook";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

type ContextType =
	| (ReturnType<typeof usePopover> & {
			setLabelId: Dispatch<SetStateAction<string | undefined>>;
			setDescriptionId: Dispatch<SetStateAction<string | undefined>>;
	  })
	| null;

export const PopoverContext = createContext<ContextType>(null);

export const usePopovercontext = () => {
	const context = useContext(PopoverContext);

	if (!context) {
		throw new Error(
			"Popover compound components cannot be rendered outside the Popover component",
		);
	}

	return context;
};
