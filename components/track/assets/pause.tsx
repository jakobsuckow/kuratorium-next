import React from "react";

interface Props {}

const Pause: React.FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="9" height="24" rx="1" fill="#0D6893" />
      <rect x="12" width="9" height="24" rx="1" fill="#0D6893" />
    </svg>
  );
};
export default Pause;
