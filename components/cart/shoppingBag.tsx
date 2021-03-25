import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface Props {
  setShifted: Dispatch<SetStateAction<boolean>>;
}

const Circle = styled.div`
  position: relative;
  border-radius: 50%;
  height: 35px;
  width: 35px;

  text-align: center;
  margin-top: 10px;
  padding-top: 6px;

  cursor: pointer;
  &:hover {
    background-color: ${(props: any) => props.theme.colors.grey};
  }
`;

const Number = styled.span`
  position: absolute;
  top: 35%;
  right: 42%;
  color: ${(props: any) => props.theme.colors.blue};
  font-size: 1.2em;
`;

const ShoppingBag: React.FC<Props> = (props: Props) => {
  const { setShifted } = props;
  return (
    <Circle onClick={() => setShifted(true)}>
      <svg
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.68 4.875H15.5479L18.3933 19.5H0.592314L3.08207 4.875H6.08H13.68Z"
          stroke="#0D6893"
        />
        <path
          d="M5.54245 4.5C5.66182 3.74965 6.02802 2.84873 6.57834 2.07882C7.26391 1.1197 8.1332 0.5 9 0.5C9.8668 0.5 10.7361 1.1197 11.4217 2.07882C11.972 2.84873 12.3382 3.74965 12.4576 4.5H9.36364H5.54245Z"
          stroke="#0D6893"
        />
      </svg>
      <Number>3</Number>
    </Circle>
  );
};
export default ShoppingBag;
