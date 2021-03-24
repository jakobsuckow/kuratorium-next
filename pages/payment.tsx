import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Paypal from "../components/paypal/paypal";
import StripeCheckout from "../components/stripe/stripeCheckout";
import { GlobalDataContext } from "../services/globalDataProvider";
import Receipt from "../components/receipt/receipt";
import Logo from "../components/logo/logo";
import ReceiptMenu from "../components/receipt/receiptMenu";
import Flex from "../components/flex/flex";
import Text from "../components/text/text";
import Divider from "../components/text/divider";
import H3 from "../components/text/h3";
import Block from "../components/text/block";

interface Props {}

const Payment: NextPage<Props> = (props: Props) => {
  const {} = props;

  const [cart, setCart] = React.useState<any | null>([]);

  const { userInput } = React.useContext(GlobalDataContext);

  React.useEffect(() => {
    const localItems = localStorage.getItem("cart");
    setCart(JSON.parse(localItems as string));
  }, []);

  const router = useRouter();

  const totalPrice = cart.reduce((acc: any, currentCart: any) => acc + currentCart.price, 0);

  const summary = parseFloat(totalPrice) + parseFloat(userInput.shippingCost);

  const formatedSummary = summary.toLocaleString("de-AT", {
    style: "currency",
    currency: "EUR",
  });

  console.log(userInput.paymentMethod);

  return (
    <Receipt>
      <Logo center />
      <ReceiptMenu />
      <H3>Cart Summary</H3>
      {cart.map((item: any, index: number) => (
        <div key={index}>
          <Flex>
            <Text>{item.name}</Text>
            <Text>{item.size?.toUpperCase()}</Text>
          </Flex>
          <Text>{item.price} €</Text>
        </div>
      ))}

      <Flex>
        <Text>shipping to: {userInput.country}</Text>
        <Text>{userInput.shippingCost}€</Text>
      </Flex>
      <Divider />
      <Flex>
        <Text>Total with Shipping</Text>
        <Text>{formatedSummary}€</Text>
      </Flex>
      <Block>
        We are shipping out all products on a weekly basis. Should you have any questions, please
        write an email to shop@kuratorium.net. By ordering, you declare your acceptance of our terms
        and conditions, as well as the cancellation policy.
      </Block>
      <H3>Shipping Address</H3>
      <Text>Contact: {userInput.emailAddress}</Text>
      <Text>
        Address: {userInput.streetName} {userInput.streetNumber}, {userInput.city},
        {userInput.country}
      </Text>
      <H3>Payment</H3>
      <Text>All transactions are secure.</Text>
      {userInput.paymentMethod === "paypal" ? (
        <Paypal amount={summary} cart={cart} />
      ) : userInput.paymentMethod === "credit cart" ? (
        <StripeCheckout />
      ) : (
        <Text>Please Select a Payment Method</Text>
      )}
    </Receipt>
  );
};

export default Payment;
