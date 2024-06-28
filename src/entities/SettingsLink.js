import React from "react";
import styled from "styled-components";
import { IoMdSettings } from "react-icons/io";

const Link = styled.a`
  color: #blue#4e87eb;
  &:visited,
  &:active {
    color: #blue#4e87eb;
  }
`;
const Conteiner = styled.div`
  padding: 1%;
  margin: auto 0;
  align-content: center;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;
const SettingsLink = () => {
  return (
    
    <Conteiner>
      <Link href="/settings">
        <IoMdSettings size={40} color="#4e87eb" />
      </Link>
    </Conteiner>
      
    
  );
};

export default SettingsLink;
