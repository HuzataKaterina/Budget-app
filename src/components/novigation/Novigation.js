import React from "react";
import { IoMdSettings } from "react-icons/io";
import { HiHome } from "react-icons/hi2";
import { LuHistory } from "react-icons/lu";
import { IoIosAddCircle } from "react-icons/io";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  flex-direction: row;
`;
const Li = styled.li`
  display: flex;
  flex-direction: row;
  margin: 0 10px;
`;
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 0;
`;
const Link = styled.a`
  &:active,
  &:visited {
    text-decoration: none;
    color: #4e87eb;
  }
`;
const Novigation = () => {
  return (
    <Container>
      <Ul>
        <Li>
          <Link href="/">
            <HiHome size={40} color="#4e87eb" />
          </Link>
        </Li>
        <Li>
          <Link href="/history">
            <LuHistory size={40} color="#4e87eb" />
          </Link>
        </Li>
      </Ul>
    </Container>
  );
};

export default Novigation;
