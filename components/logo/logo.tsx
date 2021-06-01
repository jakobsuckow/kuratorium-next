import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

interface Props {
  center?: boolean;
}

const StyledLogoWrapper = styled.div`
  width: 100%;
  margin-bottom: ${(props: Props) => (props.center ? `60px` : `0`)};
  text-align: ${(props: Props) => (props.center ? `center` : `left`)};
  padding-left: ${(props: Props) => (props.center ? `0` : `10px`)};
`;

const Logo: React.FC<Props> = (props: Props) => {
  const router = useRouter();
  const { center } = props;
  return (
    <StyledLogoWrapper center={center}>
      <Image
        src="/kuratorium-logo.png"
        alt="Kuratorium"
        width="223px"
        height="27px"
        onClick={() => {
          router.push("/");
        }}
      />
    </StyledLogoWrapper>
  );
};
export default Logo;
