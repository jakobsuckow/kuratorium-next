import styled from "styled-components";

interface Props {
  width: number;
  shifted: boolean;
}

const OutsideColumn = styled.div`
  width: calc(${(props: Props) => props.width}px - 80px);
  transform: ${(props: Props) =>
    props.shifted ? `translateX(-${props.width}px)` : `translateX(${props.width}px)`};
  margin-right: -${props => props.width}px;

  padding: 0 15px;
  text-align: justify;
  position: relative;
  margin-top: calc(-100vh + 35px);
  height: 60vh;
  transition: transform 0.7s;
  float: right;
  overflow-y: scroll;
`;

export default OutsideColumn;
