import React from "react";
import styled from "styled-components";

const Conteiner = styled.section`
  width: 100%;
  height: 100%;
  margin: 1%;
  padding: 2%;
  box-shadow: 0 0 10px #8583832b;
  background-color: #fff;
  border-radius: 20px;
`;
const Form = styled.form`
  font-size: 1em;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 1%;
  margin: 1%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 10px #8583832b;
  border: 1px solid #8583832b;
  border-radius: 5px;
`;
const Label = styled.label`
  margin: 3% 0 1%;
`;
const Input = styled.input`
  font-size: 1em;
  width: 70%;
  border: none;
  //   box-shadow: 0 0 10px #8583832b;
  border-radius: 5px;
  outline: none;
  padding: 0.5em;
`;
const Select = styled.select`
  width: 30%;
  font-size: 1em;
  border: none;
  //   box-shadow: 0 0 10px #8583832b;
  border-radius: 5px;
  outline: none;
  padding: 0.5em;
`;
const Option = styled.option``;
const Converter = () => {
  return (
    <Conteiner>
      <Form>
        <Label>Amount</Label>
        <Div>
          <Input type="number"></Input>
          <Select>
            <Option>USD</Option>
            <Option>EUR</Option>
          </Select>
        </Div>

        <Label>Converted to</Label>
        <Div>
          <Input type="number"></Input>
          <Select>
            <Option>USD</Option>
            <Option>EUR</Option>
          </Select>
        </Div>
        <Label>1 USD = 1.25 EUR</Label>
      </Form>
    </Conteiner>
  );
};

export default Converter;
