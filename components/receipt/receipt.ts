import styled from "styled-components";

const Receipt = styled.div`
  max-width: 40%;
  margin: 40px auto;
  padding: 0 8px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export default Receipt;
