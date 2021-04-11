import React from "react";
import styled from "styled-components";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Button from "../button/button";
import Item from "../flex/item";
import Text from "../text/text";

const Wrapper = styled.div`
  height: 95px;
  margin-bottom: 15px;
  width: 100%;
  background: ${props => props.theme.colors.grey};
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  align-self: stretch;
`;

const Name = styled(Text)`
  color: ${props => props.theme.colors.blue};
  padding-top: 10px;
`;

const CartImg = styled.img`
  height: 100%;
  width: auto;
  border-radius: 2px 0 0 2px;
`;

const DeleteButton = styled(Button)`
  height: 20px;
  background: #c4c4c4;
  border-radius: 5px;
  padding: 4px 8px;
  text-decoration: none;
`;

interface Props {
  name: string;
  id: string;
  image: string;
  quantity: number;
  price: number;
}

const CartItem: React.FC<Props> = (props: Props) => {
  const { id, image, quantity, name } = props;
  const { deleteItem } = React.useContext(GlobalDataContext);
  return (
    <Wrapper>
      <Item>
        <CartImg src={image} alt="" />
      </Item>
      <Item>
        <Name>{name}</Name>
        <Text>{quantity}</Text>
      </Item>
      <DeleteButton noBorder onClick={() => deleteItem(id)}>
        Delete
      </DeleteButton>
    </Wrapper>
  );
};
export default CartItem;
