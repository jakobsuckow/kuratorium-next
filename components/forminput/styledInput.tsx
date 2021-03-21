import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #000;
  background: transparent;
  border-radius: 0px;
  padding: 2px 2px;
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  margin: 4px 0;
  font-size: 1.1em;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #c8c7c5 inset !important;
  }

  &:focus {
    outline: none;
`;

export default StyledInput;
