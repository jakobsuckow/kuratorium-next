import React from "react";
import { useFormContext } from "react-hook-form";
import styled, { ThemeProps } from "styled-components";
import H3 from "../text/h3";
import H4 from "../text/h4";
import Small from "../text/small"
import Text from "../text/text"

interface Props {
  required?: boolean;
  name: string;
  value: string;
  label: string;
  labelText?: string;
}

const Wrapper = styled.div`
  margin-top: 20px;
  position: relative;
  height: 32px;
  display: block;
  margin-bottom: 60px;
`;

const RadioLabel = styled.label<ThemeProps<any>>`
  display: block;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  padding: 10px;
  border: 1px solid black;
  border-radius: 6px;
`;

const FormRadio: React.FC<Props> = (props: Props) => {
  const { required, name, value, label, labelText } = props;
  const { register } = useFormContext();

  return (
    <Wrapper>
      <RadioLabel>
        <input type="radio" value={value} required={required} name={name} ref={register} />
        <H4>{label}</H4>
        <Small>{labelText}</Small>
      </RadioLabel>
    </Wrapper>
  );
};
export default FormRadio;
