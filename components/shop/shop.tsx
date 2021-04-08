import React, { Dispatch, SetStateAction } from "react";
import { CartItem } from "../../@types";
import { clearCart, removeFromCart } from "../../services/shoppingCart";
import { useRouter } from "next/router";
import Button from "../button/button";
import Flex from "../flex/flex";
import Item from "../flex/item";
import Text from "../text/text";
import Link from "../link/link";
import Inner from "../column/inner";

interface Props {
  setShifted: Dispatch<SetStateAction<boolean>>;
}

const Shop: React.FC<Props> = (props: Props) => {
  const { setShifted } = props;
  const router = useRouter();

  return (
    <Inner>
      <Text>
        Welcome to the Kuratorium shop. We are shipping out all products on a weekly basis. Should
        you have any questions, please write an email to shop@kuratorium.net. By ordering, you
        declare your acceptance of our terms and conditions, as well as the cancellation policy.{" "}
        <Link href="mailto:shop@kuratorium.net">shop@kuratorium.net</Link>
      </Text>
      <Flex>
        <Button onClick={() => setShifted(false)}>Continue Shopping</Button>
        <Button onClick={() => router.push("/checkout")}>Go to Checkout</Button>
      </Flex>
      <Text>
        You did not add an item to the Cart.
        <Button onClick={() => setShifted(false)}>Go Back</Button>
        to Projects and add to add.
      </Text>
    </Inner>
  );
};
export default Shop;
