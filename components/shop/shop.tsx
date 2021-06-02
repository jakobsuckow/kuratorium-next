import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import Button from "../button/button";
import CartItem from "../cart/cartItem";
import Inner from "../column/inner";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Flex from "../flex/flex";
import { Blue } from "../text/text";
import Filler from "../flex/filler";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
`;

interface Props {
  setShifted: Dispatch<SetStateAction<boolean>>;
}

const Shop: React.FC<Props> = (props: Props) => {
  const { setShifted } = props;
  const { cart } = React.useContext(GlobalDataContext);

  const router = useRouter();

  return (
    <Inner>
      <FlexWrapper>
        {cart?.map((cartItem: any, i: number) => (
          <CartItem
            id={cartItem.id}
            quantity={cartItem.quantity}
            image={cartItem.image}
            name={cartItem.name}
            price={cartItem.price}
            key={i}
          />
        ))}
        <Filler />
        <div>
          <Flex>
            <Button noBorder onClick={() => setShifted(false)}>
              Go Back
            </Button>
            <Button
              noBorder
              onClick={() => {
                if (cart.length > 0) router.push("/checkout");
              }}>
              Go to checkout
            </Button>
          </Flex>
        </div>
      </FlexWrapper>
    </Inner>
  );
};
export default Shop;
