import React from "react";
import styled from "styled-components";
import HomeLink from "../entities/HomeLink";
import HistoryLink from "../entities/HistoryLink";
import SettingsLink from "../entities/SettingsLink";

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
const Novigation = () => {
  return (
    <Container>
      <Ul>
        <Li>
          <HomeLink />
        </Li>
        <Li>
          <HistoryLink />
        </Li>
        <Li>
          <SettingsLink />
        </Li>
      </Ul>
    </Container>
  );
};

export default Novigation;
