import React, { Dispatch, SetStateAction } from "react";
import ShoppingBag from "../cart/shoppingBag";
import Link from "../link/link";
import Logo from "../logo/logo";
import Heading from "../text/heading";
import Welcome from "../welcome/welcome";

interface Props {
  setShifted: Dispatch<SetStateAction<boolean>>;
}

const Intro: React.FC<Props> = (props: Props) => {
  const { setShifted } = props;
  return (
    <>
      <Heading>Kuratorium</Heading>
      <Welcome>
        <Logo />
        <ShoppingBag setShifted={setShifted} />
      </Welcome>
      <Link href={`/disclaimer`}>Disclaimer</Link>
    </>
  );
};
export default Intro;
