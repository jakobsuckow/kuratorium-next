import styled, { ThemeProps } from "styled-components";

interface Props extends ThemeProps<any> {}

const H4 = styled.h3<Props>`
  color: ${(props: Props) => props.theme.colors.blue};
  font-size: 26.06px;
  line-height: auto;
`;

export default H4;
