import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import Disclaimer from "./disclaimer";

interface Props {
  setShifted: Dispatch<SetStateAction<boolean>>;
}

const Intro: React.FC<Props> = (props: Props) => {
  const { setShifted } = props;
  return (
    <>
      <div className="welcome">
        <img src="/kuratorium-logo.png" alt="Kuratorium" className="logo" />
        <p className="headline">
          A project-based record label, initiated and operated by Lennart Wiehe and associates.
        </p>
        <span className="cursor underline" onClick={() => setShifted(true)}>
          Go to Shop
        </span>
        <br />
        <br />
        <a className="email" href="mailto:hallo@kuratorium.net">
          hallo@kuratorium.net
        </a>
      </div>
      <div>
        <label htmlFor="toggler-id-1" className="disclaimer-toggle">
          Disclaimer
        </label>
        <input type="checkbox" id="toggler-id-1" className="toggler" />
        <div className="toggler-content">
          <Disclaimer />
        </div>
      </div>
    </>
  );
};
export default Intro;
