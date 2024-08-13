import React, { useState } from "react";
import ListOfTransactions from "../shared/ListOfTransactions";
import HistoryBudgetCard from "../widgets/HistoryBudgetCard";
import HistoryCards from "../widgets/HistoryCards";
import HistoryButtons from "../widgets/HistoryBattons";
import useStore from "../app/storeBudget";
import { useEffect } from "react";

const HistoryPage = () => {
  const {
    transactions,
    monthCounter,
    selectedMonth,
    setSelectedMonth,
    setHistoryMonths,
    setMonthTransactions,
    setBudgetMonth,
  } = useStore();

  const periods = transactions.reduce((acc, transaction, i) => {
    const month = acc.find((date) => {
      if (transaction.date.slice(0, 7) === date.date) {
        return true;
      }
    });
    if (!month) {
      acc = [
        ...acc,
        {
          id: i,
          date: transaction.date.slice(0, 7),
          month: transaction.date.slice(5, 7),
          year: transaction.date.slice(0, 4),
        },
      ];
    }
    return acc;
  }, []);

  useEffect(() => {
    setHistoryMonths(periods);
    setMonthTransactions(selectedMonth.month, selectedMonth.year)
    setBudgetMonth()
  }, [selectedMonth]);

  return (
    <>
      <HistoryButtons />
      <HistoryBudgetCard />
      <HistoryCards />
      <ListOfTransactions transactions={transactions} />
    </>
  );
};

export default HistoryPage;
