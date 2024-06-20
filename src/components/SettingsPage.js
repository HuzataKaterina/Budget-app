import React from "react";
import styled from "styled-components";

const Conteiner = styled.section`
  width: 100%;
  grid-column: 2/5;
  margin: 10% auto 40%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px #8583832b;
  border-radius: 20px;
  font-size: 1em;
  margin: 10% auto;
  padding: 5%;
`;
const Select = styled.select`
  font-size: 1em;
  border: none;
  background-color: #fff;
`;
const Option = styled.option``;
const Label = styled.label`
  font-size: 1em;
`;
const Button = styled.button`
  margin-top: 5%;
  padding: 1%;
  border-radius: 15px;
  border: none;
  background-color: #4e87eb;
  color: #fff;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1%;
  justify-content: space-between;
`;
const SettingsPage = () => {
  return (
    <Conteiner>
      <Form>
        <Div>
          <Label>Language</Label>
          <Select>
            <Option>English</Option>
            <Option>Ukranian</Option>
          </Select>
        </Div>
        <Div>
          <Label>Currency</Label>
          <Select>
            <Option>USD</Option>
            <Option>UHR</Option>
          </Select>
        </Div>
        <Div>
          <Label>Theme</Label>
          <Select>
            <Option>Light</Option>
            <Option>Dark</Option>
          </Select>
        </Div>

        <Button>Save</Button>
      </Form>
    </Conteiner>
  );
};

export default SettingsPage;
