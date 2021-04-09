import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import Button from "../button/button";
import CartItem from "../cart/cartItem";
import Inner from "../column/inner";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Flex from "../flex/flex";

interface Props {
  setShifted: Dispatch<SetStateAction<boolean>>;
}

const Shop: React.FC<Props> = (props: Props) => {
  const { setShifted } = props;
  const { cart } = React.useContext(GlobalDataContext);

  const router = useRouter();

  return (
    <Inner>
      {cart?.map((cartItem: any) => (
        <CartItem id={cartItem.id} quantity={1} image={cartItem.image} name={cartItem.name} />
      ))}
      <Flex>
        <Button onClick={() => setShifted(false)}>Go Back</Button>
        <Button onClick={() => router.push("/checkout")}>Go to checkout</Button>
      </Flex>
    </Inner>
  );
};
export default Shop;
