import styled from "styled-components";

interface Props {
  width: number;
  shifted: boolean;
}

const OutsideColumn = styled.div`
  width: ${(props: Props) => props.width}px;
  transform: ${(props: Props) =>
    props.shifted ? `translateX(-${props.width}px)` : `translateX(${props.width}px)`};
  margin-right: -${props => props.width}px;
  visibility: ${props => (props.shifted ? `visible` : `hidden`)};
  padding: 0 4px;
  text-align: justify;
  position: relative;
  margin-top: calc(-100vh + 35px);
  height: 100vh;
  transition: transform 0.7s, visibility 0.7s;
  float: right;
  overflow-y: scroll;
`;

export default OutsideColumn;
