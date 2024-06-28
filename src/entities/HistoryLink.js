import React from "react";
import styled from "styled-components";
import { LuHistory } from "react-icons/lu";

const Link = styled.a`
  &:active,
  &:visited {
    text-decoration: none;
    color: #4e87eb;
  }
`;
const HistoryLink = () => {
  return (
    <Link href="/history">
      <LuHistory size={40} color="#4e87eb" />
    </Link>
  );
};

export default HistoryLink;
