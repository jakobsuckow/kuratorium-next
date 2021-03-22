import styled from "styled-components";

const Welcome = styled.div`
  margin-top: 40%;
  vertical-align: middle;
  max-width: 320px;
  overflow: scroll;
  text-align: justify;
  cursor: default;

  @media screen and (max-width: $break-small) {
    padding: 0;
    max-width: 100%;
  }
`;
export default Welcome;
