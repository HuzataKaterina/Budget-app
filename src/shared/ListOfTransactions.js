import React from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { TbPigMoney } from "react-icons/tb";
import { RiSafeFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
// import useStore from "../stores/storeBudget";

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
  return (
    <Wrapper>
      <H4>Transactions</H4>
      <Ul>
        <Li>
          <DivIcon>
            <TbPigMoney />
          </DivIcon>
          <Span>25.06.24</Span>
          <Div>
            <Span>Food&Drink</Span>
            <Span>Silpo</Span>
          </Div>
          <Span>11200.00</Span>
          <DivDel>
            <Button>
              <TiDelete />
            </Button>
          </DivDel>
        </Li>
        <Li>
          <DivIcon>
            <FaArrowRightLong color="#4e87eb" />
          </DivIcon>
          <Span>25.06.24</Span>
          <Div>
            <Span>Transport</Span>
            <Span>Comment</Span>
          </Div>
          <Span>200.00</Span>
          <DivDel>
            <Button>
              <TiDelete />
            </Button>
          </DivDel>
        </Li>
        <Li>
          <DivIcon>
            <FaArrowLeftLong />
          </DivIcon>
          <Span>25.06.24</Span>
          <Div>
            <Span>Category</Span>
            <Span>Comment</Span>
          </Div>
          <Span>200.00</Span>
          <DivDel>
            <Button>
              <TiDelete />
            </Button>
          </DivDel>
        </Li>
      </Ul>

      {/* <Table>
        <Caption>Transactions</Caption>
        <Tbody>
          <Tr>
            <Td>
              <TbPigMoney size={20} color="#00bfbd" />
            </Td>
            <Td>25.06.24</Td>
            <Td>
              <Span>Savings</Span>
            </Td>
            <Td>
              <Span>Comment</Span>
            </Td>
            <Td>
              <Span>100</Span>
            </Td>
            <Td>
              <TiDelete color="grey" />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <RiSafeFill size={20} />
            </Td>
            <Td>25.06.24</Td>
            <Td>
              <Span>Savings</Span>
            </Td>
            <Td>
              <Span>Comment Comment CommentComment Comment</Span>
            </Td>
            <Td>
              <Span>100</Span>
            </Td>
            <Td>
              <TiDelete />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <FaArrowRightLong size={20} color="#4e87eb" />
            </Td>
            <Td>25.06.24</Td>
            <Td>
              <Span>Incomes</Span>
            </Td>
            <Td>
              <Span>Comment Comment Comment Comment</Span>
            </Td>
            <Td>
              <Span>2000</Span>
            </Td>
            <Td>
              <TiDelete />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <FaArrowLeftLong size={20} color="#ef6d6d" />
            </Td>
            <Td>25.06.24</Td>
            <Td>
              <Span>Expenses</Span>
            </Td>
            <Td>
              <Span>Comment</Span>
            </Td>
            <Td>
              <Span>100</Span>
            </Td>
            <Td>
              <TiDelete />
            </Td>
          </Tr>
          <Tr>
            <Td>Icon</Td>
            <Td>25.06.24</Td>
            <Td>
              <Span>Category</Span>
            </Td>
            <Td>
              <Span>Comment</Span>
            </Td>
            <Td>
              <Span>100</Span>
            </Td>
            <Td>
              <TiDelete />
            </Td>
          </Tr>
          <Tr>
            <Td>Icon</Td>
            <Td>25.06.24</Td>
            <Td>
              <Span>Category</Span>
            </Td>
            <Td>
              <Span>Comment</Span>
            </Td>
            <Td>
              <Span>100</Span>
            </Td>
            <Td>
              <TiDelete />
            </Td>
          </Tr>
          <Tr>
            <Td>Icon</Td>
            <Td>25.06.2024</Td>
            <Td>
              <Span>Category</Span>
            </Td>
            <Td>
              <Span>Comment</Span>
            </Td>
            <Td>
              <Span>100</Span>
            </Td>
            <Td>
              <TiDelete />
            </Td>
          </Tr>
          <Tr>
            <Td>Icon</Td>
            <Td>25.06.2024</Td>
            <Td>
              <Span>Category</Span>
            </Td>
            <Td>
              <Span>Comment</Span>
            </Td>
            <Td>
              <Span>100</Span>
            </Td>
            <Td>
              <TiDelete />
            </Td>
          </Tr>
        </Tbody>
      </Table> */}
    </Wrapper>
  );
};

export default ListOfTransactions;
