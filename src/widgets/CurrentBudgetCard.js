import React from "react";
import styled from "styled-components";

const Container = styled.section`
  grid-column: 1/3;
  // grid-row: 2/3;
  // width: 90%;
  // height: 90%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 10px #8583832b;
  border-radius: 20px;
  padding: 8%;
  margin: 17% auto;
  align-items: center;
  justify-content: center;
 
`;
const Title = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  color: #686767;
  margin: 3%;
`;
const Span = styled.span`
  font-size: 3em;
  font-weight: bold;
  margin: 10% auto 5%;
`;
const SpanFullBudget = styled.span`
  color: gray;
  font-size: 1rem;
  margin-bottom: 2%;
`;
const CurrentBudgetCard = () => {
  return (
    <Container>
      <Title>January 2024</Title>
      <Span>$ 1582 left</Span>
      <SpanFullBudget>out of 2,000 budgeted</SpanFullBudget>
    </Container>
  );
};

export default CurrentBudgetCard;
