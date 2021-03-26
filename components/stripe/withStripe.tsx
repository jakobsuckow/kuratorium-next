import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import React from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

export const withStripe = (C: any) => {
  return class Component extends React.Component {
    constructor(props: any) {
      super(props);
    }
    render() {
      return (
        <Elements stripe={stripePromise} options={options}>
          <C {...this.props} />
        </Elements>
      );
    }
  };
};

const options: StripeElementsOptions = {
  locale: "en",
  fonts: [
    {
      family: "Prophet",
      src:
        'local("Prophet"), local("prophet"), url(/assets/fonts/Prophet-Regular.otf) format("opentype")',
    },
  ],
};
