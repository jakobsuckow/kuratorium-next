import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import CartItem from "../components/cart/cartItem";
import Flex from "../components/flex/flex";
import Logo from "../components/logo/logo";
import Paypal from "../components/paypal/paypal";
import Receipt from "../components/receipt/receipt";
import ReceiptMenu from "../components/receipt/receiptMenu";
import StripeCheckout from "../components/stripe/stripeCheckout";
import Block from "../components/text/block";
import Text, { Blue } from "../components/text/text";
import { GlobalDataContext } from "../services/globalDataProvider";

const Payment: NextPage = () => {
  const { userInput, cart } = React.useContext(GlobalDataContext);

  const router = useRouter();
  //@ts-ignore
  const totalPrice = cart.reduce((acc: any, currentCart: any) => acc + currentCart.price, 0);
  //@ts-ignore
  const summary = parseFloat(totalPrice) + parseFloat(userInput.shippingCost);

  const formatedSummary = summary.toLocaleString("de-AT", {
    style: "currency",
    currency: "EUR",
  });

  return (
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
          fixed
          key={index}
        />
      ))}
      <Text>Personal Info</Text>
      <br />
      <Flex>
        <Text>
          {userInput.firstName} {userInput.lastName}
        </Text>
        <Blue
          onClick={() => {
            router.push("/checkout");
          }}>
          Change
        </Blue>
      </Flex>
      <Flex>
        <Text>
          {userInput.streetName} {userInput.streetNumber}, {userInput.postal}, {userInput.city}
        </Text>
        <Text>{userInput.shippingCost}€</Text>
      </Flex>
      <br />
      <Text>Total</Text>
      {cart.map((item: any, index: number) => (
        <Flex key={index}>
          <Blue>{item.name}</Blue>
          <Blue>{item.price}€</Blue>
        </Flex>
      ))}
      <Flex></Flex>
      <br />
      <Flex>
        <Text>Total with Shipping</Text>
        <Text>{formatedSummary}€</Text>
      </Flex>
      <br />
      <Text>Payment</Text>
      <Text>All transactions are secure.</Text>
      {userInput.paymentMethod === "paypal" ? (
        <Paypal amount={summary} cart={cart} />
      ) : userInput.paymentMethod === "creditCard" ? (
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
