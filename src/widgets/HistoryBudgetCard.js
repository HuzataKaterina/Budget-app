import React from "react";
import styled from "styled-components";
import { PieChart } from "reaviz";
import {PieArcSeries} from 'reaviz'
import useStore from "../app/storeBudget";

const Container = styled.section``;
const Title = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  color: #686767;
`;
const HistoryBudgetCard = () => {
  return (
    <Container>
      <Title>January 2024</Title>
      <PieChart height={300}
      width={300}  data={[
        { key: 'Bacon', data: 13 },
        { key: 'Eggs', data: 8 },
        { key: 'Cheese', data: 17 },
      ]} series={<PieArcSeries cornerRadius={4} padAngle={0.02} padRadius={200} doughnut={true} colorScheme="cybertron" />}/>
    </Container>
  );
};

export default HistoryBudgetCard;
