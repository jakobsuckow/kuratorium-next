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
import axios from "axios";
import { withStripe } from "./withStripe";

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
          const { data } = await axios.post("api/stripe/charge/", {
            id,
            amount: amount * 100,
          });
          const { status } = data;
          if (status === "succeeded") {
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
          <label>
            Card number
            <CardNumberElement options={options}/>
          </label>
          <label>
            Name on Card
            <input type="text" placeholder="Name on Card" />
          </label>
          <div className="flex-2">
            <div className="inner mr-1">
              <label>
                Expiration date
                <CardExpiryElement options={options} />
              </label>
            </div>
            <div className="inner ml-1">
              <label>
                CVC
                <CardCvcElement options={options} />
              </label>
            </div>
          </div>
          <br />
          <div className="divider"></div>
          <div className="flex-2">
            <div className="inner">
              <p>Total Amount</p>
            </div>
            <div className="inner right">{amount}€</div>
          </div>
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
