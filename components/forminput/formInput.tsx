import React from "react";
import { useFormContext } from "react-hook-form";
import Label from "./label";
import StyledInput from "./styledInput";

interface Props {
  name: string;
  required: boolean;
  type: string;
  label: string;
}

const FormInput: React.FC<Props> = (props: Props) => {
  const { name, type, required, label, ...rest } = props;
  const { register } = useFormContext();

  return (
    <>
      <Label htmlFor={name}>
        {label}
        {required && `*`}
      </Label>
      <StyledInput ref={register} name={name} required={required} type={type} {...rest} />
    </>
  );
};
export default FormInput;
