import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section``;
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
`;
const Option = styled.option``;
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
  width: 50%;
  border: none;
  padding: 1%;
  margin: 3% auto 0;
  box-shadow: 0 0 10px #8583832b;
  background-color: #4e87eb;
  border-radius: 20px;
  color: #fff;
`;
const FormNewTransaction = () => {
  const [group, setGroup] = useState("Expenses");

  const expensesCategory = [
    {
      id: 1,
      name: "Food&Drinks",
    },
    {
      id: 2,
      name: "Transport",
    },
    {
      id: 3,
      name: "Entertainmant",
    },
    {
      id: 4,
      name: "Health",
    },
    {
      id: 5,
      name: "Shopping",
    },
  ];
  const incomesCategory = [
    {
      id: 6,
      name: "Salary",
    },
    {
      id: 7,
      name: "Royalty",
    },
    {
      id: 8,
      name: "Rental",
    },
  ];
  const savingsCategory = [
    {
      id: 9,
      name: "short-term goals",
    },
    {
      id: 10,
      name: "long-term goals",
    },
  ];

  return (
    <Container>
      <Form>
        <Div>
          <Label>Choose group</Label>
          <Select value={group} onChange={(e) => setGroup(e.target.value)}>
            <Option value="Expenses">Expenses</Option>
            <Option value="Incomes">Incomes</Option>
            <Option value="Savings">Savings</Option>
          </Select>
        </Div>
        <Div>
          <Label>Choose Category</Label>
          {group === "Expenses" && (
            <Select>
              <Option value={expensesCategory[0].id}>
                {expensesCategory[0].name}
              </Option>
              <Option value={expensesCategory[1].id}>
                {expensesCategory[1].name}
              </Option>
              <Option value={expensesCategory[2].id}>
                {expensesCategory[2].name}
              </Option>
              expensesCategory
            </Select>
          )}
          {group === "Incomes" && (
            <Select>
              <Option value={incomesCategory[0].id}>
                {incomesCategory[0].name}
              </Option>
              <Option value={incomesCategory[1].id}>
                {incomesCategory[1].name}
              </Option>
              <Option value={incomesCategory[2].id}>
                {incomesCategory[2].name}
              </Option>
            </Select>
          )}
          {group === "Savings" && (
            <Select>
              <Option value={savingsCategory[0].id}>
                {savingsCategory[0].name}
              </Option>
              <Option value={savingsCategory[1].id}>
                {savingsCategory[1].name}
              </Option>
            </Select>
          )}
        </Div>
        <Div>
          <Label>Set the sum</Label>
          <InputNumber type="number" />
        </Div>
        <Div>
          <Label>Your comment</Label>
          <InputArea type="text" />
        </Div>
        <Button>Add</Button>
      </Form>
    </Container>
  );
};

export default FormNewTransaction;
