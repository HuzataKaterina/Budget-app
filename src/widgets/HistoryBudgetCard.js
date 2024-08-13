import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PieChart } from "reaviz";
import { PieArcSeries } from "reaviz";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import useStore from "../app/storeBudget";

const Container = styled.section`
  display: flex;
  grid-column: 1/4;
  flex-direction: column;
  padding: 1em;
  background-color: #fff;
  box-shadow: 0 0 10px #8583832b;
  border-radius: 20px;
`;
const Title = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  justify-content: center;
  color: #686767;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const HistoryBudgetCard = () => {
  const {
    historyMonths,
    monthCounter,
    nextMonthCounter,
    prevMonthCounter,
    selectedMonth,
    setSelectedMonth

  } = useStore();

  useEffect(()=>{
    setSelectedMonth(historyMonths[monthCounter].month, historyMonths[monthCounter].year)
  }, [monthCounter])

  console.log(historyMonths);
  const date = new Date(0, selectedMonth.month - 1).toLocaleDateString(
    "en-CA",
    {
      month: "long",
    }
  );

  return (
    <Container>
      <Div>
        <IoIosArrowDropleftCircle
          size={25}
          color="#4e87eb"
          onClick={prevMonthCounter}
        />
        <Title>
        
          {selectedMonth.month} {selectedMonth.year} {date}- counter:
          {monthCounter}
        </Title>
        <IoIosArrowDroprightCircle
          size={25}
          color="#4e87eb"
          onClick={nextMonthCounter}
        />
      </Div>

      <PieChart
        height={250}
        width={250}
        data={[
          { key: "Bacon", data: 13 },
          { key: "Eggs", data: 8 },
          { key: "Cheese", data: 17 },
        ]}
        series={
          <PieArcSeries
            cornerRadius={4}
            padAngle={0.02}
            padRadius={200}
            doughnut={true}
            colorScheme="cybertron"
          />
        }
      />
    </Container>
  );
};

export default HistoryBudgetCard;
