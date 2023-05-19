import { ComboBox, ComboBoxProps } from "./combobox.component";
import { RequiredKeys } from "@/types";
import { useField } from "remix-validated-form";

type FormComboBoxProps<TValue extends object> = RequiredKeys<
	ComboBoxProps<TValue>,
	"name"
>;

export const FormComboBox = <TValue extends object>({
	name,
	...props
}: FormComboBoxProps<TValue>) => {
	const { error, getInputProps } = useField(name);

	const inputProps = getInputProps();

	return (
		<ComboBox
			{...props}
			errorMessage={error}
			onSelectionChange={(v) => {
				console.log(v);
				inputProps.onChange?.({ target: { name, value: v } });
			}}
		/>
	);
};
