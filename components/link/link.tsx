import React from "react";
import styled from "styled-components";
import NextLink from "next/link";

interface Props {
  href: string;
  children: any;
}

const StyledLink = styled.a`
  color: #000;
  &:active,
  &:hover,
  &:visited {
    color: #000;
  }
`;

const Link: React.FC<Props> = (props: Props) => {
  const { href, children } = props;
  return (
    <NextLink href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};
export default Link;
