import React from "react";
import { loadStripe, PaymentMethod, StripeCardNumberElement } from "@stripe/stripe-js";
import {
  Elements,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import axios from "axios";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

interface Props {
  amount: number;
}

const Stripe = (props: Props) => {
  const { amount } = props;
  return (
    <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
      <StripeComponent amount={amount} />
    </Elements>
  );
};

const StripeComponent: React.FC<Props> = (props: Props) => {
  const { amount } = props;
  const router = useRouter();

  const [submitting, setSubmitting] = React.useState<boolean>(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
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

          if (status !== "succeeded") {
            console.log(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {submitting ? (
          <div className="loading">waiting for credit card...</div>
        ) : (
          <>
            <label>
              Card number
              <CardNumberElement
                options={options}
                onReady={() => {
                  // console.log("CardNumberElement [ready]")
                }}
                onChange={event => {
                  // console.log("CardNumberElement [change]", event)
                }}
                onBlur={() => {
                  // console.log("CardNumberElement [blur]")
                }}
                onFocus={() => {
                  // console.log("CardNumberElement [focus]")
                }}
              />
            </label>
            <label>
              Name on Card
              <input type="text" placeholder="Name on Card" />
            </label>
            <div className="flex-2">
              <div className="inner mr-1">
                <label>
                  Expiration date
                  <CardExpiryElement
                    options={options}
                    onReady={() => {
                      // console.log("CardNumberElement [ready]")
                    }}
                    onChange={event => {
                      // console.log("CardNumberElement [change]", event)
                    }}
                    onBlur={() => {
                      // console.log("CardNumberElement [blur]")
                    }}
                    onFocus={() => {
                      // console.log("CardNumberElement [focus]")
                    }}
                  />
                </label>
              </div>
              <div className="inner ml-1">
                <label>
                  CVC
                  <CardCvcElement
                    options={options}
                    onReady={() => {
                      // console.log("CardNumberElement [ready]")
                    }}
                    onChange={event => {
                      // console.log("CardNumberElement [change]", event)
                    }}
                    onBlur={() => {
                      // console.log("CardNumberElement [blur]")
                    }}
                    onFocus={() => {
                      // console.log("CardNumberElement [focus]")
                    }}
                  />
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
    </div>
  );
};

export default Stripe;

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      family: "Prophet",
      src:
        'local("Prophet"), local("prophet"), url(/assets/fonts/Prophet-Regular.otf) format("opentype")',
    },
  ],
};

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
