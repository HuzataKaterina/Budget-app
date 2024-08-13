import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Converter from "../features/Converter";
import CurrentGrapf from "../entities/CurrentGrapf";
import useStore from "../app/storeBudget";

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
  &.selected {
    background-color: #fff;
    box-shadow: 0 0 10px #8583832b;
  }
  &:hover {
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 0 10px #8583832b;
    border-radius: 20px;
  }
`;

const CurrentBudgetDetails = () => {
  const [converterClicked, setConverterClicked] = useState(false);
  const {
    monthTransactionsByCategories,
    setSelectedGroup,
    selectedGroup,
    setFilteredTransactions,
    transactions,
  } = useStore();

  useEffect(() => {
    setFilteredTransactions(selectedGroup);
  }, [selectedGroup]);

  console.log(selectedGroup);
  return (
    <Wrapper>
      <>
        <ContainerButtons>
          <Button
            className={`${
              selectedGroup === "Expenses" && !converterClicked
                ? "selected"
                : ""
            }`}
            onClick={() => {
              setSelectedGroup("Expenses");
              setConverterClicked(false);
            }}
          >
            Expenses
          </Button>
          <Button
            className={`${
              selectedGroup === "Incomes" && !converterClicked
                ? "selected"
                : ""
            }`}
            onClick={() => {
              setSelectedGroup("Incomes");
              setConverterClicked(false);
            }}
          >
            Incomes
          </Button>
          <Button
            className={`${
              selectedGroup === "Savings" && !converterClicked
                ? "selected"
                : ""
            }`}
            onClick={() => {
              setSelectedGroup("Savings");
              setConverterClicked(false);
            }}
          >
            Savings
          </Button>
          <Button
            className={`${
              converterClicked && converterClicked === false ? "selected" : ""
            }`}
            onClick={() => {
              setConverterClicked(true);
            }}
          >
            Converter
          </Button>
        </ContainerButtons>

        {!converterClicked && (
          <ContainerGrapf>
            <CurrentGrapf />
          </ContainerGrapf>
        )}
        {converterClicked && (
          <Container>
            <Converter />
          </Container>
        )}
      </>
    </Wrapper>
  );
};

export default CurrentBudgetDetails;
