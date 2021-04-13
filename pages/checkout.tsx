import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AutoComplete from "../components/autocomplete/autoComplete";
import { GlobalDataContext } from "../services/globalDataProvider";
import Receipt from "../components/receipt/receipt";
import Logo from "../components/logo/logo";
import Divider from "../components/text/divider";
import Text from "../components/text/text";
import H3 from "../components/text/h3";
import ReceiptMenu from "../components/receipt/receiptMenu";
import Flex from "../components/flex/flex";
import Script from "next/dist/client/experimental-script.js";
import CartItem from "../components/cart/cartItem";

const Checkout = () => {
  const [autoComp, setAutocomp] = React.useState<boolean>(false);

  const { cart } = React.useContext(GlobalDataContext);

  const router = useRouter();

  // const totalPrice = cart.reduce((acc: any, currentCart: any) => acc + currentCart.price, 0);

  // const summary = parseFloat(totalPrice);

  // const formatedSummary = summary.toLocaleString("de-AT", {
  //   style: "currency",
  //   currency: "EUR",
  // });

  const onLoad = React.useCallback(() => {
    console.log(`loaded Google Script tag`);
    setAutocomp(true);
  }, []);

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
    <>
      <Script
        id="paypal1"
        onLoad={() => console.log(`Paypal loaded`)}
        src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_KEY}&currency=EUR`}
        async></Script>
      <Script
        onLoad={onLoad}
        id="googleplace"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY}&libraries=places`}></Script>
      <Receipt>
        <Logo center />
        <ReceiptMenu />
        {cart.map((item: any, index: number) => (
          <CartItem
            id={item.id}
            quantity={item.quantity}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}

        <Flex>
          <Text>items in Cart: </Text>
          <Text>{cart.length}</Text>
        </Flex>
        <Flex>
          <Text>Total Price</Text>
        </Flex>

        <Divider />
        <AutoComplete autoComp={autoComp} setAutoComp={setAutocomp} />
      </Receipt>
    </>
  );
};

export default Checkout;
