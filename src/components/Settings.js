import React from "react";
import { IoMdSettings } from "react-icons/io";
import styled from "styled-components";


const Conteiner = styled.div`
  padding: 1%;
  margin: auto 0;
`
const Link = styled.a`
  color: #blue#4e87eb;
  &:visited,
  &:active {
    color: #blue#4e87eb;
  }
`;
const Settings = () => {
  return (
    <Conteiner>
      <Link href="/settings">
        <IoMdSettings size={40} color="#4e87eb" />
      </Link>
    </Conteiner>
      
    
  );
};

export default Settings;
