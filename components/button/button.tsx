import styled from "styled-components";

interface Props {
  noBorder?: boolean;
}

const Button = styled.button`
  border: ${(props: Props) => (props.noBorder ? `none` : `1px solid #000`)};
  cursor: ${(props: Props) => (props.noBorder ? `pointer` : `default`)};
  background: transparent;
  text-decoration: ${(props: Props) => (props.noBorder ? `underline` : `none`)};
  border-radius: 0px;
  padding: 2px 2px;
  font-family: inherit;

  &:focus {
    outline: 0;
  }
`;

export default Button;
