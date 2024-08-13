import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CircularSlider from "@fseehawer/react-circular-slider";
import useStore from "../app/storeBudget";

const Container = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  padding: 1%;
  box-shadow: 0 0 10px #8583832b;
  background-color: #fff;
  border-radius: 20px;
`;
const Title = styled.span`
  padding: 0.5em;
  color: black;
  font-size: 1em;
`;
const Span = styled.span`
  color: gray;
  font-weight: bold;
`;
const SpanLeft = styled(Span)`
  color: #4e87eb;
  font-size: 0.75em;
`;
const CurrentGrapf = () => {
  const {
    monthTransactionsByCategories,
    budgetMonth,
    selectedGroup,
    expensesCategory,
    incomesCategory,
    savingsCategory,
    setFilteredTransactions,
  } = useStore();

  const [categories, setCategiries] = useState([]);

  useEffect(() => {
    switch (selectedGroup) {
      case "Expenses":
        setCategiries(expensesCategory);
        break;
      case "Incomes":
        setCategiries(incomesCategory);
        break;
      case "Savings":
        setCategiries(savingsCategory);
        break;
    }
  }, [selectedGroup]);

  console.log(monthTransactionsByCategories);
  const transactionsCategory = monthTransactionsByCategories.reduce(
    (acc, transaction, index) => {
      const obj = categories.find((category) => {
        if (category.id === transaction.id) {
          acc[index] = { ...transaction, name: category.name };
        }
      });
      return acc;
    },
    []
  );

  console.log(transactionsCategory);

  return (
    <>
      {transactionsCategory.map((category) => (
        <Container>
          <Title>{category.name}</Title>
          <CircularSlider
            width={150}
            progressColorFrom="#00bfbd"
            min={0}
            max={budgetMonth[selectedGroup.toLowerCase()]}
            dataIndex={category.sum}
            hideKnob={true}
            knobDraggable={false}
            labelFontSize={25}
            valueFontSize={0}
            label={`${Math.round(
              (category.sum * 100) / budgetMonth[selectedGroup.toLowerCase()]
            )}%`}
          />
          <SpanLeft>
            {category.sum}
            <Span>{` out of ${budgetMonth[selectedGroup.toLowerCase()]}`}</Span>
          </SpanLeft>
        </Container>
      ))}
    </>
  );
};

export default CurrentGrapf;
