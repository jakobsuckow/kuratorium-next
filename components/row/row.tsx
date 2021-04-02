import styled from "styled-components";

interface Props {
  shifted: boolean;
  width: number;
}

const Row = styled.div`
  transform: ${(props: Props) =>
    props.shifted ? `translateX(-${props.width}px)` : `translateX(-0px)`};

  display: flex;
  width: 100vw;
  height: 100vh;
  transition: transform 0.7s;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export default Row;
