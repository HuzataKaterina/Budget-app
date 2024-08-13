import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import useStore from "../app/storeBudget";
import styled from "styled-components";

const Container = styled.section`
  width: 60%;
  margin: auto;
`;
const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px #8583832b;
  background-color: #fff;
  border-radius: 20px;
  margin: auto;
  padding: 5.5% 5%;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 1em;
  margin: auto;
  padding: 1%;
  justify-content: flex-end;
`;
const DivButtons = styled(Div)`
  justify-content: space-evenly;
`;
const Label = styled.label`
  // width: 30%;
  margin: 0%;
  text-align: left;
  padding: 0 2%;
`;
const Select = styled.select`
  width: 65.5%;
  padding: 1%;
  border-radius: 3px;
  border: 1px solid #8583832b;
  background-color: inherit;
`;
const Option = styled.option`
  background-color: inherit;
`;
const InputNumber = styled.input`
  width: 63%;
  padding: 1%;
  border-radius: 3px;
  border: 1px solid #8583832b;
`;
const InputArea = styled(InputNumber)`
  // width: 63%;
  // padding: 1%;
  // border: 1px solid #8583832b;
`;
const Button = styled.button`
  width: 35%;
  border: none;
  padding: 1%;
  margin: 3% 1% 0;
  box-shadow: 0 0 10px #8583832b;
  background-color: #4e87eb;
  border-radius: 20px;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
const FormNewTransaction = ({ setIsFormOpen }) => {
  const { addTransaction, expensesCategory, incomesCategory, savingsCategory } =
    useStore();
  const [newTransaction, setNewTransaction] = useState({
    group: "Expenses",
    category: "",
    categoryId: "",
    sum: "",
    comment: "",
    date: new Date().toISOString().slice(0, 10),
  });
  const [options, setOptions] = useState(expensesCategory);

  useEffect(() => {
    switch (newTransaction.group) {
      case "Expenses":
        setOptions(expensesCategory);
        break;
      case "Incomes":
        setOptions(incomesCategory);
        break;
      case "Savings":
        setOptions(savingsCategory);
    }
  }, [newTransaction.group]);

  const clear = () => {
    setNewTransaction({
      group: "Expenses",
      category: "",
      categoryId: "",
      sum: "",
      comment: "",
      date: new Date().toLocaleDateString(),
    });
    setIsFormOpen(false);
  };
  const handleClick = (e) => {
    e.preventDefault();
    addTransaction(newTransaction);
    clear();
  };
  const setCategory = (e) => {
    options.map((option) => {
      if (option.id === +e.target.value) {
        setNewTransaction({
          ...newTransaction,
          category: option.name,
          categoryId: +e.target.value,
        });
      }
    });
  };

  return (
    <Container>
      <Form action="#" method="post">
        <Div>
          <Label>Choose group</Label>
          <Select
            value={newTransaction.group}
            onChange={(e) => {
              setNewTransaction((transaction) => ({
                ...transaction,
                group: e.target.value,
              }));
            }}
            name="group"
          >
            <Option value="Expenses">Expenses</Option>
            <Option value="Incomes">Incomes</Option>
            <Option value="Savings">Savings</Option>
          </Select>
        </Div>
        <Div>
          <Label>Choose category</Label>
          <Select
            value={newTransaction.categoryId}
            id={newTransaction.categoryId}
            onChange={setCategory}
            name="category"
          >
            <Option>Select...</Option>
            {options.map((option) => (
              <Option value={option.id}>{option.name}</Option>
            ))}
          </Select>
        </Div>
        <Div>
          <Label>Set the sum</Label>
          <InputNumber
            value={newTransaction.sum}
            type="number"
            onChange={(e) =>
              setNewTransaction((transaction) => ({
                ...transaction,
                sum: +e.target.value,
              }))
            }
          />
        </Div>
        <Div>
          <Label>Your comment</Label>
          <InputArea
            value={newTransaction.comment}
            type="text"
            onChange={(e) =>
              setNewTransaction((transaction) => ({
                ...transaction,
                comment: e.target.value,
              }))
            }
          />
        </Div>
        <DivButtons>
          <Button type="submit" onClick={handleClick}>
            Add
          </Button>
          <Button onClick={() => setIsFormOpen(false)}>CLose</Button>
        </DivButtons>
      </Form>
    </Container>
  );
};
FormNewTransaction.propTypes = {
  setIsFormOpen: propTypes.func.isRequired,
};
export default FormNewTransaction;
