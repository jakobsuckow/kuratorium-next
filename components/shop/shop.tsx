import React, { Dispatch, SetStateAction } from "react";
import { CartItem } from "../../@types";
import { clearCart, removeFromCart } from "../../services/shoppingCart";
import { useRouter } from "next/router";
import Button from "../button/button";
import Flex from "../flex/flex";
import Item from "../flex/item";
import Text from "../text/text";
import Link from "../link/link";

interface Props {
  setShifted: Dispatch<SetStateAction<boolean>>;
}

const Shop: React.FC<Props> = (props: Props) => {
  const { setShifted } = props;
  const router = useRouter();

  const [cart, setCart] = React.useState<any | null>([]);

  React.useEffect(() => {
    const localItems = localStorage.getItem("cart");
    setCart(JSON.parse(localItems as string));
  }, [setShifted, clearCart, removeFromCart]);

  return (
    <>
      <h1>Shop</h1>
      <Text>
        Welcome to the Kuratorium shop. We are shipping out all products on a weekly basis. Should
        you have any questions, please write an email to shop@kuratorium.net. By ordering, you
        declare your acceptance of our terms and conditions, as well as the cancellation policy.{" "}
        <Link href="mailto:shop@kuratorium.net">shop@kuratorium.net</Link>
      </Text>
      {cart?.length > 0 ? (
        <>
          {cart.map((c: CartItem, i: number) => (
            <div key={i}>
              <Flex>
                <Text>{c.name}</Text>
                <Text>quantity: {c.quantity}</Text>
              </Flex>
              <Text onClick={() => removeFromCart(c.id)}>X</Text>
            </div>
          ))}

          <Flex>
            <Button onClick={() => setShifted(false)}>Continue Shopping</Button>
            <Button onClick={() => router.push("/checkout")}>Go to Checkout</Button>
          </Flex>
        </>
      ) : (
        <Text>
          You did not add an item to the Cart.
          <Button onClick={() => setShifted(false)}>Go Back</Button>
          to Projects and add to add.
        </Text>
      )}
    </>
  );
};
export default Shop;
