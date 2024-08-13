import React, { useEffect, useState } from "react";
import useStore from "../app/storeBudget";
import CurrentBudgetDetails from "../widgets/CurrentBudgetDetails";
import CurrentBudgetCard from "../widgets/CurrentBudgetCard";
import ListOfTransactions from "../shared/ListOfTransactions";

const HomePage = () => {
  const {
    transactions,
    setMonthTransactions,
    monthTransactions,
    setBudgetMonth,
    setFilteredTransactions,
    setCategoryMonth,
    selectedGroup,
    historyMonths,
    setHistoryMonths,
    setSelectedMonth,
    setHistoryMonth
  } = useStore();

  const currentMonth = new Date().toISOString().slice(5, 7);
  const currentYear = new Date().toISOString().slice(0, 4);
  console.log(currentYear)
  
  useEffect(() => {
    setMonthTransactions(currentMonth, currentYear);
    setBudgetMonth();
    setCategoryMonth();
    setFilteredTransactions(selectedGroup);
  

  }, [transactions, selectedGroup]);
  
  


  return (
    <>
      <CurrentBudgetCard />
      <CurrentBudgetDetails />
      <ListOfTransactions transactions={monthTransactions} />
    </>
  );
};

export default HomePage;
