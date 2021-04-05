import styled from "styled-components";
import formBasicStyles from "./formBasicStyles";

const StyledInput = styled.input`
  ${formBasicStyles};
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #c8c7c5 inset !important;
  }
  &:focus {
    outline: none;
  }
  &:required {
    box-shadow: none;
  }
`;

export default StyledInput;
