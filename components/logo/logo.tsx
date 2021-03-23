import React from "react";
import styled from "styled-components";

interface Props {
  center?: boolean;
}

const StyledLogoWrapper = styled.div`
  width: 100%;
  text-align: ${(props: Props) => (props.center ? `center` : `left`)};
`;

const Logo: React.FC<Props> = (props: Props) => {
  const { center } = props;
  return (
    <StyledLogoWrapper center={center}>
      <img src="/kuratorium-logo.png" alt="Kuratorium" width="320px" />
    </StyledLogoWrapper>
  );
};
export default Logo;
