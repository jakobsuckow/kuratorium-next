import React, { useState } from "react";
import styled from "styled-components";
import { CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";

import stripeElementStyles from "./stripeElementStyle";
import Label from "../forminput/label";

const CardNumber = styled(CardNumberElement)`
  ${stripeElementStyles};
`;

const CardExpiry = styled(CardExpiryElement)`
  ${stripeElementStyles};
`;

const CardCVC = styled(CardCvcElement)`
  ${stripeElementStyles};
`;

const stripeFieldType = {
  cardNumber: CardNumber,
  cardExpiry: CardExpiry,
  cardCVC: CardCVC,
};

interface Props {
  label: string;
  disabled: boolean;
  required: boolean;
  type: string;
}

const StripeField: React.FC<Props> = (props: Props) => {
  const { label, disabled, required, type } = props;
  const [error, setError] = useState(null);
  //@ts-ignore
  const StripeElement = stripeFieldType[type];

  const elementStyles = {
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

  const onChange = ({ error: err }: { error: any }) => {
    if (err) {
      setError(err.message);
    } else {
      setError(null);
    }
  };

  return (
    <>
      <Label>{label}</Label>
      <StripeElement disabled={disabled} onChange={onChange} style={elementStyles} name={type} />
    </>
  );
};

export default StripeField;
