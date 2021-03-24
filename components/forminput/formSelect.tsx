import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Label from "./label";
import StyledSelect from "./styledSelect";

interface Props {
  name: string;
  required: boolean;
  options: string[];
  label: string;
}

const FormSelect: React.FC<Props> = (props: Props) => {
  const { name, required, options, label } = props;
  const { register, control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ name, value, onChange }) => (
        <>
          <Label htmlFor={name}>
            {label}
            {required && `*`}
          </Label>
          <StyledSelect
            ref={register}
            name={name}
            required={required}
            onChange={(e: any) => onChange(e.target.value)}>
            {options.map((option: any) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </StyledSelect>
        </>
      )}
    />
  );
};
export default FormSelect;
