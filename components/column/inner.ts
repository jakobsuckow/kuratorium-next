import styled from "styled-components";

interface Props {
  lg?: boolean;
}

const Inner = styled.div<Props>`
  padding: ${(props: Props) => (props.lg ? `0 40px` : `0 4px`)};

  @media screen and (max-width: 600px) {
    padding: 0 4px;

    ${(props: Props) => props.lg && `height: 100vh;`}
  }
`;

export default Inner;
