import styled, { ThemeProps } from "styled-components";

interface Props extends ThemeProps<any> {}

const Text = styled.p<Props>`
  font-size: 16px;
  line-height: 1.7em;
  color: ${(props: Props) => props.theme.colors.black};
`;

export default Text;
