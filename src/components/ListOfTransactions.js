import React from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { TbPigMoney } from "react-icons/tb";
import { RiSafeFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Wrapper = styled.section`
  grid-column: 1/6;
  grid-row: 3/4;
  width: 100%;
  margin: 1%;
`;
const Caption = styled.caption`
  text-align: left;
  padding: 1%;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  padding: 1%;
  text-align: left;
  & svg {
    font-size: 2em;
    padding: 0.2em;
  }
`;
const Tbody = styled.tbody`
  width: 100%;
`;
const Td = styled.td`
  padding: 1%;
  margin: auto;
`;
const Tr = styled.tr`
  box-shadow: 0 0 10px #8583832b;
  border-radius: 20px;
  padding: 1%;
  width: 100%;
`;
const Span = styled.span`
  font-size: 1.25em;
  padding: 1%;
  margin: 1%;
`;
const ListOfTransactions = () => {
  return (
    <Wrapper>
      <Table>
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
      </Table>
    </Wrapper>
  );
};

export default ListOfTransactions;
