import { modalStyles } from "./modal.styles";
import { createContext, useContext } from "react";

type ContextType = { styles: ReturnType<typeof modalStyles> };

export const ModalContext = createContext<ContextType>({} as ContextType);

export const useModalContext = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error("Modal components must be wrapped in <Modal />");
	}

	return context;
};
