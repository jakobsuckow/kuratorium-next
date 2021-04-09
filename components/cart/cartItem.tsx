import React from "react";
import styled from "styled-components";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Button from "../button/button";
import Text from "../text/text";

const Wrapper = styled.div`
  height: 95px;
  margin-bottom: 15px;
  width: 100%;
  background: ${props => props.theme.colors.grey};
  display: flex;
  border-radius: 1px;
`;

const CartImg = styled.img`
  height: 100%;
  width: auto;
`;

interface Props {
  name: string;
  id: string;
  image: string;
  quantity: number;
}

const CartItem: React.FC<Props> = (props: Props) => {
  const { id, image, quantity, name } = props;
  const { deleteItem } = React.useContext(GlobalDataContext);
  return (
    <Wrapper>
      <CartImg src={image} alt="" />
      <Text>{name}</Text>
      <Text>{quantity}</Text>
      <Button noBorder onClick={() => deleteItem(id)}>
        Delete
      </Button>
    </Wrapper>
  );
};
export default CartItem;
