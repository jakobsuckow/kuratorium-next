import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AutoComplete from "../components/autocomplete/autoComplete";
import { GlobalDataContext } from "../services/globalDataProvider";
import Receipt from "../components/receipt/receipt";
import Logo from "../components/logo/logo";
import Divider from "../components/text/divider";
import Underline from "../components/text/underline";
import Text from "../components/text/text";
import H3 from "../components/text/h3";
import ReceiptMenu from "../components/receipt/receiptMenu";
import Flex from "../components/flex/flex";

const Checkout = () => {
  const [cart, setCart] = React.useState<any | null>([]);

  const { userInput, setUserInput } = React.useContext(GlobalDataContext);

  const router = useRouter();

  React.useEffect(() => {
    const localItems = localStorage.getItem("cart");
    setCart(JSON.parse(localItems as string));
  }, []);

  const totalPrice = cart.reduce((acc: any, currentCart: any) => acc + currentCart.price, 0);

  const summary = parseFloat(totalPrice);

  const formatedSummary = summary.toLocaleString("de-AT", {
    style: "currency",
    currency: "EUR",
  });
  if (cart.length === 0) {
    return (
      <Receipt>
        <Logo center />

        <Text>you did not add any Products</Text>
        <Link href="/">Go back to Shop</Link>
      </Receipt>
    );
  }

  return (
    <Receipt>
      <Logo center />
      <ReceiptMenu />
      <H3 className="mb-4">Cart Summary</H3>
      {cart.map((item: any, index: number) => (
        <div key={index}>
          <Flex>
            <Text>{item.name}</Text>
            <Text>{item.price} €</Text>
          </Flex>
          <Text>Size</Text>
          <Text>{item.size?.toUpperCase()}</Text>
        </div>
      ))}

      <Flex>
        <Text>items in Cart: </Text>
        <Text>{cart.length}</Text>
      </Flex>
      <Flex>
        <Text>Total Price</Text>
        <Text>{formatedSummary}</Text>
      </Flex>

      <Divider />
      <AutoComplete />
    </Receipt>
  );
};

export default Checkout;
