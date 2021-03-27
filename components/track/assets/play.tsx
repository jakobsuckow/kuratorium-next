import React from "react";

interface Props {}

const Play: React.FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 1.76619C0 0.988895 0.847971 0.508783 1.5145 0.908698L18.5708 11.1425C19.2182 11.5309 19.2182 12.4691 18.5708 12.8575L1.5145 23.0913C0.847971 23.4912 0 23.0111 0 22.2338V1.76619Z"
        fill="#0D6893"
      />
    </svg>
  );
};
export default Play;
