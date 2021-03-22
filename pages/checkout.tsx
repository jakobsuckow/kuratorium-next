import React, { useContext } from "react";
import Link from "next/link";
import AutoComplete from "../components/autocomplete/autoComplete";
import { Order } from "../@types";
import { GlobalDataContext } from "../services/globalDataProvider";
import Receipt from "../components/receipt/receipt";
import Logo from "../components/logo/logo";
import Divider from "../components/text/divider";
import Underline from "../components/text/underline";
import Text from "../components/text/text";
import H3 from "../components/text/h3";

const Checkout = () => {
  const [cart, setCart] = React.useState<any | null>([]);

  const { userInput, setUserInput } = React.useContext(GlobalDataContext);

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
      <>
        <Logo />

        <Text>you did not add any Products</Text>
        <Link href="/">Go back to Shop</Link>
      </>
    );
  }

  return (
    <Receipt>
      <Logo />
      <Underline>Personal Details</Underline>
      <Text>Payment</Text>
      <Text>Overview</Text>
      <H3 className="mb-4">Cart Summary</H3>
      {cart.map((item: any, index: number) => (
        <div key={index}>
          <Text>{item.name}</Text>
          {item.size ? (
            <>
              <Text>{item.size.toUpperCase()}</Text>
            </>
          ) : null}

          <Text>{item.price} €</Text>
        </div>
      ))}

      <Text>items in Cart: </Text>
      <Text>{cart.length}</Text>
      <Text>Total Price</Text>
      <Text>{formatedSummary}</Text>

      <Divider />
      <AutoComplete userInput={userInput} setUserInput={setUserInput} />
    </Receipt>
  );
};

export default Checkout;
