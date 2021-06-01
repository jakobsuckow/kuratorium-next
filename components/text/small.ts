import styled, { ThemeProps } from "styled-components";

interface Props extends ThemeProps<any> {}

const Small = styled.p<Props>`
  font-size: 12px;
  color: ${(props: Props) => props.theme.colors.black};
  cursor: default;
`;

export default Small;
