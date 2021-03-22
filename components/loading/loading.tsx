import React from "react";
import StyledLoading from "./styledLoading";

interface Props {
  name?: string;
}

const Loading: React.FC<Props> = (props: Props) => {
  const { name } = props;
  return <StyledLoading>Loading...{name && `${name}`}</StyledLoading>;
};
export default Loading;
