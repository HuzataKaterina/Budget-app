import React from "react";
import styled from "styled-components";
import useStore from "../app/storeBudget";
import { LuShoppingCart } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { FaWallet } from "react-icons/fa";

const Container = styled.section`
  grid-column: 4/6;
  display: flex;
  flex-direction: column;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  box-shadow: 0 0 10px #8583832b;
  border-radius: 15px;
  width: 75%;
  padding: 5%;
  margin: auto 5%;
`;
const DicIcon = styled.div`
  // border-radius: 25%;
  // background-color:#4e87eb
  margin: auto 5%;
`;
const DivDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  text-align: left;
`;
const Span = styled.span`
  font-size: 1em;
`;
const Title = styled.span`
  font-size: 1.5em;
`;

const HistoryCards = () => {
  const { budgetMonth } = useStore()
  return (
    <>
      <Container>
        <Div>
          <DicIcon>
            <LuShoppingCart size={40} color="#4e87eb" />
          </DicIcon>
          <DivDetails>
            <Title>${budgetMonth.expenses}</Title>
            <Span>spent this period</Span>
          </DivDetails>
        </Div>
        <Div>
          <DicIcon>
            <FaWallet size={40} color="#4e87eb" />
          </DicIcon>

          <DivDetails>
            <Title>${budgetMonth.currentBudget}</Title>
            <Span>left this period</Span>
          </DivDetails>
        </Div>
      </Container>
    </>
  );
};

export default HistoryCards;
