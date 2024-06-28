import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import styled from "styled-components";

const ConteinerAdd = styled.div`
  padding: 1%;
  align-content: center;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;
const Button = styled.button`
  border: none;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`;
const AddButton = ({ setIsFormOpen }) => {
  return (
    <ConteinerAdd>
      <Button onClick={() => setIsFormOpen(true)}>
        <IoIosAddCircle size={40} color="#4e87eb" />
      </Button>
    </ConteinerAdd>
  );
};

export default AddButton;
