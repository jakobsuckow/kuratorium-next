import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Flex from "../components/flex/flex";
import Logo from "../components/logo/logo";
import Paypal from "../components/paypal/paypal";
import Receipt from "../components/receipt/receipt";
import ReceiptMenu from "../components/receipt/receiptMenu";
import StripeCheckout from "../components/stripe/stripeCheckout";
import Block from "../components/text/block";
import Divider from "../components/text/divider";
import H4 from "../components/text/h4";
import Text from "../components/text/text";
import { GlobalDataContext } from "../services/globalDataProvider";

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

  return (
    <Receipt>
      <Logo center />
      <ReceiptMenu />
      <H4>Cart Summary</H4>
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
      <H4>Shipping Address</H4>
      <Text>Contact: {userInput.emailAddress}</Text>
      <Text>
        Address: {userInput.streetName} {userInput.streetNumber}, {userInput.city},
        {userInput.country}
      </Text>
      <H4>Payment</H4>
      <Text>All transactions are secure.</Text>
      {userInput.paymentMethod === "paypal" ? (
        <Paypal amount={summary} cart={cart} />
      ) : userInput.paymentMethod === "credit card" ? (
        <StripeCheckout
          //@ts-ignore
          amount={summary}
        />
      ) : (
        <Text>Please Select a Payment Method</Text>
      )}
    </Receipt>
  );
};

export default Payment;
