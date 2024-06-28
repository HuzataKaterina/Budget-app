import React from "react";
import styled from "styled-components";
import { HiHome } from "react-icons/hi2";

const Link = styled.a`
  &:active,
  &:visited {
    text-decoration: none;
    color: #4e87eb;
  }
`;
const HomeLink = () => {
  return (
    <Link href="/">
      <HiHome size={40} color="#4e87eb" />
    </Link>
  );
};

export default HomeLink;
