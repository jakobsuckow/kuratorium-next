import React from "react";
import { StripeCardNumberElement } from "@stripe/stripe-js";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { withStripe } from "./withStripe";
import StripeField from "./stripeField";
import Divider from "../text/divider";
import Flex from "../flex/flex";
import Text from "../text/text";

interface Props {
  amount: number;
}

const StripeCheckout: React.FC<Props> = (props: Props) => {
  const { amount } = props;
  const router = useRouter();

  const [submitting, setSubmitting] = React.useState<boolean>(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (stripe && elements) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement) as StripeCardNumberElement,
      });
      if (!error && paymentMethod) {
        const { id } = paymentMethod;
        setSubmitting(true);
        try {
          const res = await fetch("api/stripe/charge/", {
            method: "POST",
            body: JSON.stringify({ id, amount: amount * 100 }),
          });

          if (res.ok) {
            router.push("/thankyou");
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {submitting ? (
        <div className="loading">waiting for credit card...</div>
      ) : (
        <>
          <StripeField
            label="Card number"
            type="cardNumber"
            disabled={submitting}
            required={true}
          />
          <StripeField
            label="Card expiry"
            type="cardExpiry"
            disabled={submitting}
            required={true}
          />
          <StripeField label="CVC" type="cardCVC" disabled={submitting} required={true} />

          <Divider />
          <Flex>
            <Text>Total Amount</Text>
            <Text>{amount}€</Text>
          </Flex>
          <button type="submit" disabled={!stripe} className="mt-2">
            Pay with credit cart
          </button>
        </>
      )}
    </form>
  );
};

export default withStripe(StripeCheckout);

const options = {
  style: {
    base: {
      fontSize: "16px",
      fontFamiliy: "Prophet, Helvetica, sans-serif",
      color: "#000",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#8f8f8f",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};
