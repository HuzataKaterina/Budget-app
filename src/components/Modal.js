import React from "react";
import { createPortal } from "react-dom";
import FormNewTransaction from "./FormNewTransaction";
import styled from "styled-components";

const modalRoot = document.querySelector("#root-modal");
const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
 
`;
const Modal = () =>
  createPortal(
    <Div>
      <FormNewTransaction />
    </Div>,
    modalRoot
  );
export default Modal;
