import styled from "styled-components";

interface Props {
  width: number;
  shifted: boolean;
}

const OutsideColumn = styled.div`
  width: ${(props: Props) => (props.shifted ? `${props.width}px` : `0px`)};
  transform: ${(props: Props) =>
    props.shifted ? `translateX(-${props.width}px)` : `translateX(${props.width}px)`};
  margin-right: -${props => props.width}px;
  margin-top: 35px;
  visibility: ${props => (props.shifted ? `visible` : `hidden`)};
  padding: 0 4px;
  text-align: justify;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  transition: transform 0.7s, visibility 0.7s;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export default OutsideColumn;
