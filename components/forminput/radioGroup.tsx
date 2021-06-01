import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  options: string[];
  name: string;
}

const RadioGroup: React.FC<Props> = (props: Props) => {
  const { options, name } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      render={() => (
        <>
          {options.map((a: any, i: number) => (
            <input type="radio" value={i} name={name} />
          ))}
        </>
      )}
    />
  );
};
export default RadioGroup;
