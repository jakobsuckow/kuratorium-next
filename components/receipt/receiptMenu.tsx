import React from "react";
import styled from "styled-components";
import Link from "../link/link";

interface Props {}

const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ReceiptMenu: React.FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <MenuWrapper>
      <Link href="/checkout">Personal Details</Link>
      <Link href="/payment">Payment</Link>
      <Link href="/overview">Overview</Link>
    </MenuWrapper>
  );
};
export default ReceiptMenu;
