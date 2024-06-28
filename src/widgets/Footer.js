import React from "react";
import styled from "styled-components";

const Conteiner = styled.footer`
width:100%;
  grid-column: 1/6;
  // grid-row: 6/7;
  // position: fixed;
  // left: 0;
  // bottom: 0;
  height: 10%;
 
`;
const Footer = () => {
  return <Conteiner>&copy; Budget-tracker </Conteiner>;
};

export default Footer;
