import React, { useState } from "react";
import styled from "styled-components";
import Converter from "../features/Converter";
import CurrentGrapf from "../entities/CurrentGrapf";
import FormNewTransaction from "../features/FormNewTransaction";

const Wrapper = styled.section`
  grid-column: 3/6;
  width: 95%;
  margin: 1% auto;
  padding: 2%;
`;
const ContainerGrapf = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  border-radius: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 15px;
    height: 8px;
    background-color: #fafafb;
    border-radius: 5px;
    margin: 1px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4e87eb;
    border-radius: 5px;
  }
`;
const Container = styled(ContainerGrapf)`
  overflow-x: hidden;
  overflow-y: hidden;
`;
const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto 1%;
  justify-items: stretch;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 25%;
  font-weight: bold;
  border: none;
  background-color: #fafafb;
  font-size: 1em;
  padding: 2%;
  border-radius: 20px;
  justify-items: stretch;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 0 10px #8583832b;
    border-radius: 20px;
  }
`;

const CurrentBudgetDetails = () => {
  const [buttonClicked, setButtonClicked] = useState("expenses");

  return (
    <Wrapper>
      <>
        <ContainerButtons>
          <Button onClick={() => setButtonClicked("Expenses")}>Expenses</Button>
          <Button onClick={() => setButtonClicked("Incomes")}>Incomes</Button>
          <Button onClick={() => setButtonClicked("Incomes")}>Savings</Button>
          <Button onClick={() => setButtonClicked("converter")}>
            Converter
          </Button>
        </ContainerButtons>

        {buttonClicked !== "converter" && (
          <ContainerGrapf>
            <CurrentGrapf />
            <CurrentGrapf />
            <CurrentGrapf />
            <CurrentGrapf />
            <CurrentGrapf />
          </ContainerGrapf>
        )}
        {buttonClicked == "converter" && (
          <Container>
            <Converter />
          </Container>
        )}
        {/* <FormNewTransaction/> */}
      </>
    </Wrapper>
  );
};

export default CurrentBudgetDetails;
