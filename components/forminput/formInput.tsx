import { type } from "node:os";
import React from "react";
import { useFormContext } from "react-hook-form";
import StyledInput from "./styledInput";

interface Props {
  name: string;
  required: boolean;
  type: string;
}

const FormInput: React.FC<Props> = (props: Props) => {
  const { name, type, required } = props;
  const { register } = useFormContext();
  return <StyledInput ref={register} name={name} required={required} type={type} />;
};
export default FormInput;
