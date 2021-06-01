import styled, { ThemeProps } from "styled-components";

interface Props extends ThemeProps<any> {}

const Text = styled.p<Props>`
  font-size: 16px;
  color: ${(props: Props) => props.theme.colors.black};
  cursor: default;
`;

export default Text;

export const Blue = styled(Text)`
  color: ${(props: Props) => props.theme.colors.blue};
`;
