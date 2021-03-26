import { css } from "styled-components";
import formBasicStyles from "../forminput/formBasicStyles";

const stripeElementStyles = css`
  ${formBasicStyles};
  &.StripeElement--focus {
  }
  width: 100%;
`;

export default stripeElementStyles;
