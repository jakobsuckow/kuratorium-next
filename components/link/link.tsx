import React from "react";
import styled from "styled-components";
import NextLink from "next/link";
import { useRouter } from "next/router";
import StyledLink from "../text/styledLink";

interface Props {
  href: string;
  children: any;
}

const Link: React.FC<Props> = (props: Props) => {
  const { href, children } = props;
  const router = useRouter();
  return (
    <NextLink href={href} passHref>
      <StyledLink isActive={router.pathname === href}>{children}</StyledLink>
    </NextLink>
  );
};
export default Link;
