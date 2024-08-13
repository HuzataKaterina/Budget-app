import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import useStore from "../app/storeBudget";

const Div = styled.div`
  grid-column: 1/6;
  width: 50%;
  margin: 2% auto;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 20px;
  justify-content: center;
  box-shadow: 0 0 10px #8583832b;
`;
const Button = styled.button`
  background-color: #fff;
  width: 50%;
  padding: 2%;
  font-size: 1em;
  border: none;
  border-radius: 20px;
  &.selected {
    color: #fff;
    background: #4e87eb;
  }
  &:hover {
    background: #4e87eb;
    transition: background-color 1s ease;
    cursor: pointer;
  }
`;
const HistoryButtons = () => {
  const { setHistorySelectedButton, historySelectedButton } = useStore();


  return (
    <Div>
      <Button
        className={`${historySelectedButton === "monthly" ? "selected" : ""}`}
        onClick={() => {
          setHistorySelectedButton("monthly");
        }}
      >
        Monthly
      </Button>
      <Button
        onClick={() => setHistorySelectedButton("yearly")}
        className={`${historySelectedButton === "yearly" ? "selected" : ""}`}
      >
        Yearly
      </Button>
    </Div>
  );
};

export default HistoryButtons;
