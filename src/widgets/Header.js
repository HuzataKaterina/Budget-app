import React, { useState } from "react";
import styled from "styled-components";
import Novigation from "../features/Novigation";
import Modal from "../features/Modal";
import AddButton from "../entities/AddButton";

const Conteiner = styled.header`
  grid-column: 1/6;
  grid-row: 1/2;
  background-color: #fafafb;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 0 10px #8583832b;
  border-radius: 10px;
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
const Button = styled.button`
  border: none;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`;
const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Conteiner>
        <Novigation />
        <AddButton setIsFormOpen={setIsFormOpen} />
      </Conteiner>
      {isFormOpen && <Modal setIsFormOpen={setIsFormOpen}></Modal>}
    </>
  );
};

export default Header;
