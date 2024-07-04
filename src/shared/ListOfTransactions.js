import React from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { TbPigMoney } from "react-icons/tb";
import { RiSafeFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import useStore from "../app/storeBudget";

const Wrapper = styled.section`
  grid-column: 1/6;
  width: 100%;
`;
const Span = styled.span`
  font-size: 1em;
  padding: 1%;
`;
const Li = styled.li`
  display: flex;
  margin: 1%;
  box-shadow: 0 0 10px #8583832b;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // border-bottom: 1px solid lightgrey;
  & svg {
    font-size: 1.5em;
  }
`;
const Ul = styled.ul`
  padding: 0;
  list-style-type: none;
  // border-top: 1px solid lightgray;
`;
const Div = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 1%;
  text-align: left;
  & :nth-child(2){
  color: grey;
  font-size: 0.8em;
  })
`;
const DivIcon = styled.div`
  width: 7%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const DivDel = styled(Div)`
  width: auto;
  padding: 1%;
  margin-left: auto;
`;
const Button = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`;
const H4 = styled.h4`
  text-align: left;
  padding: 0 1%;
`;
const ListOfTransactions = () => {
  const transactions = useStore((state) => state.transactions);
  console.log(transactions);
  return (
    <Wrapper>
      <H4>Transactions</H4>
      {transactions.length == 0 && <div>transactions doesn't exist</div>}
      <Ul>
        {transactions.map((transaction) => (
          <Li>
            <DivIcon>
              {transaction.group === "Expenses" && (
                <FaArrowLeftLong color="#ef6d6d" />
              )}
              {transaction.group === "Incomes" && (
                <FaArrowRightLong color="#4e87eb" />
              )}
              {transaction.group === "Savings" && (
                <TbPigMoney color="#00bfbd" />
              )}
            </DivIcon>
            <Span>{transaction.date}</Span>
            <Div>
              <Span>{transaction.category}</Span>
              <Span>{transaction.comment}</Span>
            </Div>
            <Span>{transaction.sum}</Span>
            <DivDel>
              <Button>
                <TiDelete color="grey"/>
              </Button>
            </DivDel>
          </Li>
        ))}
      </Ul>
    </Wrapper>
  );
};

export default ListOfTransactions;
