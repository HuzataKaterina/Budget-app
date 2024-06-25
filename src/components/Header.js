import React, { useState } from "react";
import styled from "styled-components";
import Settings from "./Settings";
import Novigation from "./novigation/Novigation";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import  Modal from "../components/Modal";

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
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Conteiner>
        <ContainerSettings>
          <Link href="/settings">
            <IoMdSettings size={40} color="#4e87eb" />
          </Link>
        </ContainerSettings>

        <Novigation />
        <ConteinerAdd>
          <button onClick={() => setIsFormOpen(true)}>
            <IoIosAddCircle size={40} color="#4e87eb" />
          </button>
        </ConteinerAdd>
      </Conteiner>
      {isFormOpen && <Modal></Modal>}
    </>
  );
};

export default Header;
