import styled from "styled-components";

const Receipt = styled.div`
  max-width: 40%;
  margin: auto;
  padding: 0 4px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export default Receipt;
