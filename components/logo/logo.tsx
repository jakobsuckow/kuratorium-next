import React from "react";

interface Props {}

const Logo: React.FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <>
      <img src="/kuratorium-logo.png" alt="Kuratorium" className="logo" />
    </>
  );
};
export default Logo;
