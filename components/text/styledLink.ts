import styled from "styled-components";

interface Props {
  isActive: boolean;
}

const StyledLink = styled.a`
  text-decoration: ${(props: Props) => (props.isActive ? `none` : `underline`)};
  color: #000;
  &:active,
  &:hover,
  &:visited {
    color: #000;
  }
  font-size: 16px;
`;

export default StyledLink;
