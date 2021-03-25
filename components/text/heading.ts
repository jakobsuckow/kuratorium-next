import styled, { ThemeProps } from "styled-components";
import Text from "./text";

interface Props extends ThemeProps<any> {}

const Heading = styled(Text)`
  font-size: 7vw;
  color: ${(props: Props) => props.theme.colors.blue};
  cursor: default;

  @media screen and (max-width: 600px) {
    font-size: 18vw;
  }
`;

export default Heading;
