export type UILiteralSize = "xs" | "sm" | "md" | "lg" | "xl";
export type UISize = UILiteralSize | Omit<string, UILiteralSize>;

export type UINumberSize = UILiteralSize | Omit<string, UILiteralSize> | number;

export type UISizes = Record<UISize & string, string>;

export type TVSlots<Styles extends (...args: unknown[]) => unknown> =
	ReturnType<Styles> extends string ? undefined : keyof ReturnType<Styles>;

export type ClassNames<Styles extends (...args: unknown[]) => unknown> =
	TVSlots<Styles> extends string
		? {
				[K in TVSlots<Styles>]?: string;
		  }
		: never;
