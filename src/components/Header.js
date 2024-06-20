import React from "react";
import styled from "styled-components";
import Settings from "./Settings";
import Novigation from "./novigation/Novigation";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

const Conteiner = styled.header`
  grid-column: 1/6;
  grid-row: 1/2;
  background-color: #fafafb;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 0 10px #8583832b;
  border-radius: 15px;
`;
const ConteinerAdd = styled.div`
  padding: 1%;
  align-content: center;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;
const ContainerSettings = styled(ConteinerAdd)`
  margin: auto 0;
`;
const Link = styled.a`
  color: #blue#4e87eb;
  &:visited,
  &:active {
    color: #blue#4e87eb;
  }
`;
const Header = () => {
  return (
    <>
      <Conteiner>
        <ContainerSettings>
          <Link href="/settings">
            <IoMdSettings size={40} color="#4e87eb" />
          </Link>
        </ContainerSettings>
        {/* <Settings/> */}

        <Novigation />
        <ConteinerAdd>
          <IoIosAddCircle size={40} color="#4e87eb" />
        </ConteinerAdd>
      </Conteiner>
    </>
  );
};

export default Header;
