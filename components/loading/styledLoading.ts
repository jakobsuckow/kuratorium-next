import styled from "styled-components";

const StyledLoading = styled.div`
  &::after {
    content: "|";
    animation: rotation 1s infinite linear;
    display: inline-block;
    text-align: center;
  }
`;

export default StyledLoading;
