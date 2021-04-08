import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 95px;
  margin-bottom: 15px;
  width: 100%;
  background: ${props => props.theme.colors.grey};
  display: flex;
  border-radius: 1px;
`;

interface Props {}

const CartItem: React.FC<Props> = (props: Props) => {
  const {} = props;
  return <Wrapper></Wrapper>;
};
export default CartItem;
